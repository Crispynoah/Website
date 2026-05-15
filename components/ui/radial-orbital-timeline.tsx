"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowRight, Link, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: React.ElementType;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
}

export default function RadialOrbitalTimeline({
  timelineData,
}: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) newState[parseInt(key)] = false;
      });
      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);
        const relatedItems = getRelatedItems(id);
        const newPulseEffect: Record<number, boolean> = {};
        relatedItems.forEach((relId) => { newPulseEffect[relId] = true; });
        setPulseEffect(newPulseEffect);
        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return newState;
    });
  };

  useEffect(() => {
    if (!autoRotate) return;
    const timer = setInterval(() => {
      setRotationAngle((prev) => Number(((prev + 0.3) % 360).toFixed(3)));
    }, 50);
    return () => clearInterval(timer);
  }, [autoRotate]);

  const centerViewOnNode = (nodeId: number) => {
    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    const totalNodes = timelineData.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;
    setRotationAngle(270 - targetAngle);
  };

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = 180;
    const radian = (angle * Math.PI) / 180;
    const x = radius * Math.cos(radian);
    const y = radius * Math.sin(radian);
    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(0.4, Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2)));
    return { x, y, angle, zIndex, opacity };
  };

  const getRelatedItems = (itemId: number): number[] => {
    const currentItem = timelineData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    return getRelatedItems(activeNodeId).includes(itemId);
  };

  const getStatusStyles = (status: TimelineItem["status"]): string => {
    switch (status) {
      case "completed": return "text-white bg-white/10 border-white/30";
      case "in-progress": return "text-zinc-950 bg-zinc-50 border-zinc-50";
      case "pending": return "text-zinc-400 bg-white/5 border-white/10";
    }
  };

  return (
    <div
      className="w-full h-[600px] flex flex-col items-center justify-center overflow-hidden"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
          style={{ perspective: "1000px" }}
        >
          <div className="absolute w-12 h-12 rounded-full bg-gradient-to-br from-zinc-300 via-zinc-100 to-zinc-400 flex items-center justify-center z-10">
            <div className="absolute w-16 h-16 rounded-full border border-white/15 animate-ping opacity-60" />
            <div className="absolute w-20 h-20 rounded-full border border-white/8 animate-ping opacity-40" style={{ animationDelay: "0.5s" }} />
            <div className="w-6 h-6 rounded-full bg-white/90 backdrop-blur-md" />
          </div>

          <div className="absolute w-80 h-80 rounded-full border border-white/8" />

          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                ref={(el) => { nodeRefs.current[item.id] = el; }}
                className="absolute transition-all duration-700 cursor-pointer"
                style={{
                  transform: `translate(${position.x}px, ${position.y}px)`,
                  zIndex: isExpanded ? 200 : position.zIndex,
                  opacity: isExpanded ? 1 : position.opacity,
                }}
                onClick={(e) => { e.stopPropagation(); toggleItem(item.id); }}
              >
                <div
                  className={`absolute rounded-full ${isPulsing ? "animate-pulse" : ""}`}
                  style={{
                    background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
                    width: `${item.energy * 0.4 + 40}px`,
                    height: `${item.energy * 0.4 + 40}px`,
                    left: `-${(item.energy * 0.4 + 40 - 40) / 2}px`,
                    top: `-${(item.energy * 0.4 + 40 - 40) / 2}px`,
                  }}
                />

                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${
                    isExpanded
                      ? "bg-zinc-50 text-zinc-950 border-zinc-50 scale-150 shadow-lg shadow-white/20"
                      : isRelated
                      ? "bg-white/20 text-white border-white animate-pulse"
                      : "bg-zinc-950 text-zinc-300 border-white/20"
                  }`}
                >
                  <Icon size={14} />
                </div>

                <div
                  className={`absolute top-12 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-medium tracking-wide transition-all duration-300 ${
                    isExpanded ? "text-zinc-50 scale-125" : "text-zinc-500"
                  }`}
                >
                  {item.title}
                </div>

                {isExpanded && (
                  <Card className="absolute top-20 left-1/2 -translate-x-1/2 w-60 bg-zinc-900/95 backdrop-blur-xl border-white/10 shadow-2xl shadow-black/50">
                    <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-px h-2.5 bg-white/20" />
                    <CardHeader className="pb-2 p-4">
                      <div className="flex justify-between items-center mb-1">
                        <Badge className={`px-2 text-xs ${getStatusStyles(item.status)}`}>
                          {item.status === "completed" ? "Erledigt" : item.status === "in-progress" ? "Aktiv" : "Geplant"}
                        </Badge>
                        <span className="text-xs font-mono text-zinc-500">{item.date}</span>
                      </div>
                      <CardTitle className="text-sm text-zinc-100">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs text-zinc-400 p-4 pt-0">
                      <p>{item.content}</p>
                      <div className="mt-3 pt-3 border-t border-white/8">
                        <div className="flex justify-between items-center text-xs mb-1">
                          <span className="flex items-center gap-1 text-zinc-500">
                            <Zap size={9} /> Aufwand
                          </span>
                          <span className="font-mono text-zinc-400">{item.energy}%</span>
                        </div>
                        <div className="w-full h-0.5 bg-white/8 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-zinc-400 to-zinc-200"
                            style={{ width: `${item.energy}%` }}
                          />
                        </div>
                      </div>
                      {item.relatedIds.length > 0 && (
                        <div className="mt-3 pt-3 border-t border-white/8">
                          <div className="flex items-center mb-1.5 gap-1 text-zinc-500">
                            <Link size={9} />
                            <span className="text-xs uppercase tracking-wider">Verbunden</span>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {item.relatedIds.map((relatedId) => {
                              const relatedItem = timelineData.find((i) => i.id === relatedId);
                              return (
                                <Button
                                  key={relatedId}
                                  variant="outline"
                                  size="sm"
                                  className="h-5 px-1.5 text-xs border-white/10 text-zinc-400 hover:text-zinc-100"
                                  onClick={(e) => { e.stopPropagation(); toggleItem(relatedId); }}
                                >
                                  {relatedItem?.title}
                                  <ArrowRight size={7} className="ml-0.5" />
                                </Button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

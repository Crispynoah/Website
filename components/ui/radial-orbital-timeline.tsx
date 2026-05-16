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
  const [orbitRadius, setOrbitRadius] = useState(180);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const animFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const autoRotateRef = useRef(autoRotate);
  autoRotateRef.current = autoRotate;

  // Responsive orbit radius
  useEffect(() => {
    const update = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.offsetWidth;
      setOrbitRadius(Math.min(180, Math.max(90, Math.floor(w / 2) - 70)));
    };
    update();
    const ro = new ResizeObserver(update);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

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

  // requestAnimationFrame-based rotation (smooth, pauses when tab hidden)
  useEffect(() => {
    if (!autoRotate) {
      if (animFrameRef.current !== null) {
        cancelAnimationFrame(animFrameRef.current);
        animFrameRef.current = null;
      }
      lastTimeRef.current = null;
      return;
    }

    const animate = (timestamp: number) => {
      if (lastTimeRef.current === null) lastTimeRef.current = timestamp;
      const delta = Math.min(timestamp - lastTimeRef.current, 100); // cap delta to avoid jump after tab switch
      lastTimeRef.current = timestamp;
      setRotationAngle((prev) => Number(((prev + delta * 0.006) % 360).toFixed(3)));
      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);
    return () => {
      if (animFrameRef.current !== null) {
        cancelAnimationFrame(animFrameRef.current);
        animFrameRef.current = null;
      }
    };
  }, [autoRotate]);

  const centerViewOnNode = (nodeId: number) => {
    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    const totalNodes = timelineData.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;
    setRotationAngle(270 - targetAngle);
  };

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radian = (angle * Math.PI) / 180;
    const x = orbitRadius * Math.cos(radian);
    const y = orbitRadius * Math.sin(radian);
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
      case "completed": return "text-zinc-700 bg-zinc-100 border-zinc-300";
      case "in-progress": return "text-zinc-50 bg-zinc-900 border-zinc-900";
      case "pending": return "text-zinc-400 bg-zinc-100 border-zinc-200";
    }
  };

  // Shift card horizontally so it stays within the container
  const getCardOffset = (nodeX: number): number => {
    const containerW = containerRef.current?.offsetWidth ?? 800;
    const halfW = containerW / 2;
    const cardW = Math.min(240, containerW - 32);
    const halfCard = cardW / 2;
    const nodeAbsX = halfW + nodeX;
    if (nodeAbsX + halfCard > containerW - 8) {
      return -(nodeAbsX + halfCard - (containerW - 8));
    }
    if (nodeAbsX - halfCard < 8) {
      return halfCard - nodeAbsX + 8;
    }
    return -halfCard;
  };

  return (
    <div
      className="w-full h-[440px] md:h-[600px] flex flex-col items-center justify-center"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
        >
          {/* Center node */}
          <div className="absolute w-12 h-12 rounded-full bg-gradient-to-br from-zinc-200 via-zinc-100 to-zinc-300 flex items-center justify-center z-10 border border-zinc-200 shadow-sm">
            <div className="absolute w-16 h-16 rounded-full border border-zinc-300/50 animate-ping opacity-40" />
            <div className="absolute w-20 h-20 rounded-full border border-zinc-200/50 animate-ping opacity-25" style={{ animationDelay: "0.5s" }} />
            <div className="w-6 h-6 rounded-full bg-zinc-900/10 backdrop-blur-md" />
          </div>

          {/* Orbit circle — size matches actual orbit radius */}
          <div
            className="absolute rounded-full border border-zinc-200"
            style={{ width: orbitRadius * 2, height: orbitRadius * 2 }}
          />

          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const Icon = item.icon;
            const cardW = Math.min(240, (containerRef.current?.offsetWidth ?? 800) - 32);
            const cardOffset = getCardOffset(position.x);

            return (
              <div
                key={item.id}
                ref={(el) => { nodeRefs.current[item.id] = el; }}
                className="absolute cursor-pointer"
                style={{
                  transform: `translate(${position.x}px, ${position.y}px)`,
                  zIndex: isExpanded ? 200 : position.zIndex,
                  opacity: isExpanded ? 1 : position.opacity,
                  willChange: "transform",
                  transition: "opacity 0.7s",
                }}
                onClick={(e) => { e.stopPropagation(); toggleItem(item.id); }}
              >
                <div
                  className={`absolute rounded-full ${isPulsing ? "animate-pulse" : ""}`}
                  style={{
                    background: "radial-gradient(circle, rgba(0,0,0,0.04) 0%, transparent 70%)",
                    width: `${item.energy * 0.4 + 40}px`,
                    height: `${item.energy * 0.4 + 40}px`,
                    left: `-${(item.energy * 0.4 + 40 - 40) / 2}px`,
                    top: `-${(item.energy * 0.4 + 40 - 40) / 2}px`,
                  }}
                />

                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${
                    isExpanded
                      ? "bg-zinc-900 text-zinc-50 border-zinc-900 scale-150 shadow-lg shadow-zinc-900/20"
                      : isRelated
                      ? "bg-zinc-200 text-zinc-700 border-zinc-400 animate-pulse"
                      : "bg-white text-zinc-500 border-zinc-200 shadow-sm"
                  }`}
                >
                  <Icon size={14} />
                </div>

                <div
                  className={`absolute top-12 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-medium tracking-wide transition-all duration-300 ${
                    isExpanded ? "text-zinc-900 scale-125" : "text-zinc-400"
                  }`}
                >
                  {item.title}
                </div>

                {isExpanded && (
                  <Card
                    className="absolute top-20 bg-white/95 backdrop-blur-xl border-zinc-200 shadow-xl shadow-zinc-900/10"
                    style={{
                      width: `${cardW}px`,
                      left: "20px",
                      transform: `translateX(${cardOffset}px)`,
                    }}
                  >
                    <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-px h-2.5 bg-zinc-300" />
                    <CardHeader className="pb-2 p-4">
                      <div className="flex justify-between items-center mb-1">
                        <Badge className={`px-2 text-xs ${getStatusStyles(item.status)}`}>
                          {item.status === "completed" ? "Erledigt" : item.status === "in-progress" ? "Aktiv" : "Geplant"}
                        </Badge>
                        <span className="text-xs font-mono text-zinc-400">{item.date}</span>
                      </div>
                      <CardTitle className="text-sm text-zinc-800">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs text-zinc-500 p-4 pt-0">
                      <p>{item.content}</p>
                      <div className="mt-3 pt-3 border-t border-zinc-100">
                        <div className="flex justify-between items-center text-xs mb-1">
                          <span className="flex items-center gap-1 text-zinc-400">
                            <Zap size={9} /> Aufwand
                          </span>
                          <span className="font-mono text-zinc-500">{item.energy}%</span>
                        </div>
                        <div className="w-full h-0.5 bg-zinc-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-zinc-400 to-zinc-700"
                            style={{ width: `${item.energy}%` }}
                          />
                        </div>
                      </div>
                      {item.relatedIds.length > 0 && (
                        <div className="mt-3 pt-3 border-t border-zinc-100">
                          <div className="flex items-center mb-1.5 gap-1 text-zinc-400">
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
                                  className="h-5 px-1.5 text-xs border-zinc-200 text-zinc-500 hover:text-zinc-800"
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

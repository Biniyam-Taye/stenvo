"use client";

import React, { useEffect, useRef, useState } from 'react';
import { fabric } from 'fabric';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Image as ImageIcon, Type, Trash2, ShoppingCart } from 'lucide-react';

export default function EditorUI() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);
    const [selectedColor, setSelectedColor] = useState('#ffffff');

    // Initialize canvas
    useEffect(() => {
        if (canvasRef.current && !canvas) {
            const initCanvas = new fabric.Canvas(canvasRef.current, {
                width: 300,
                height: 400,
                backgroundColor: 'transparent',
            });

            // Add a default print area boundary (optional visual guide)
            const clipPath = new fabric.Rect({
                width: 300,
                height: 400,
                left: 0,
                top: 0,
                absolutePositioned: true,
                selectable: false,
                evented: false,
                stroke: '#ccc',
                strokeWidth: 1,
                strokeDashArray: [5, 5],
                fill: 'transparent'
            });
            initCanvas.add(clipPath);

            setCanvas(initCanvas);

            return () => {
                initCanvas.dispose();
            };
        }
    }, [canvasRef, canvas]);

    // Handle keyboard deletes
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.key === 'Delete' || e.key === 'Backspace') && canvas) {
                // Prevent deleting if user is editing text
                if (canvas.getActiveObject() && canvas.getActiveObject()?.isEditing) return;
                deleteSelected();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [canvas]);

    const addText = () => {
        if (!canvas) return;
        const text = new fabric.IText('Your Text Here', {
            left: 50,
            top: 150,
            fontFamily: 'sans-serif',
            fontSize: 28,
            fill: selectedColor === '#000000' ? '#ffffff' : '#000000',
            fontWeight: 'bold',
            textAlign: 'center'
        });
        canvas.add(text);
        canvas.setActiveObject(text);
        canvas.renderAll();
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!canvas || !e.target.files?.[0]) return;
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (f) => {
            const data = f.target?.result;
            if (typeof data === 'string') {
                fabric.Image.fromURL(data, (img) => {
                    // Scale down image if it's too large
                    if (img.width && img.width > 200) {
                        img.scaleToWidth(200);
                    }
                    canvas.add(img);
                    canvas.centerObject(img);
                    canvas.setActiveObject(img);
                    canvas.renderAll();
                });
            }
        };
        reader.readAsDataURL(file);
        // Reset file input
        e.target.value = '';
    };

    const deleteSelected = () => {
        if (!canvas) return;
        const activeObjects = canvas.getActiveObjects();
        if (activeObjects.length) {
            canvas.discardActiveObject();
            activeObjects.forEach(function (object) {
                // Don't delete the boundary box
                if (object.selectable !== false) {
                    canvas.remove(object);
                }
            });
        }
    };

    return (
        <div className="flex flex-col md:flex-row gap-6 h-full max-w-6xl mx-auto">
            {/* Editor Main Area */}
            <div className="flex-1 bg-gray-50/50 rounded-2xl shadow-inner border border-gray-100 flex flex-col items-center justify-center relative overflow-hidden min-h-[500px] p-8">

                {/* Mock T-shirt Background */}
                <div className="absolute inset-0 flex items-center justify-center transition-colors duration-500" style={{ backgroundColor: selectedColor }}>
                    {/* Simple Mockup Shape (T-shirt SVG) */}
                    <svg
                        className="w-full max-w-[500px] h-full opacity-90 drop-shadow-xl"
                        viewBox="0 0 500 600"
                        fill={selectedColor === '#ffffff' ? '#f8fafc' : selectedColor}
                        stroke={selectedColor === '#ffffff' ? '#e2e8f0' : 'transparent'}
                        strokeWidth="2"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M 150 40 Q 250 100 350 40 L 480 120 L 440 240 L 400 220 L 400 580 L 100 580 L 100 220 L 60 240 L 20 120 Z" />
                    </svg>
                </div>

                {/* Fabric Canvas Container */}
                <div className="relative z-10 bg-transparent border-none mt-16 scale-90 md:scale-100">
                    <canvas ref={canvasRef} className="rounded-lg shadow-sm" />
                    <div className="absolute -top-8 left-0 text-xs font-semibold text-gray-500 bg-white/80 px-2 py-1 rounded backdrop-blur border shadow-sm">
                        Print Area (Front)
                    </div>
                </div>
            </div>

            {/* Tools Panel */}
            <Card className="w-full md:w-80 flex-shrink-0 border-gray-100 shadow-md flex flex-col h-[calc(100vh-8rem)]">
                <CardHeader className="bg-green-50/50 border-b pb-4">
                    <CardTitle className="text-xl">Design Editor</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 pt-6 flex-1 overflow-y-auto">
                    {/* Colors */}
                    <div className="space-y-3">
                        <Label className="text-gray-600 font-semibold uppercase text-xs tracking-wider">Garment Color</Label>
                        <div className="flex flex-wrap gap-3">
                            {[
                                { hex: '#ffffff', name: 'White' },
                                { hex: '#0f172a', name: 'Black' },
                                { hex: '#16a34a', name: 'AMU Green' },
                                { hex: '#ef4444', name: 'Red' },
                                { hex: '#fcd34d', name: 'Yellow' }
                            ].map(c => (
                                <button
                                    key={c.hex}
                                    title={c.name}
                                    className={`w-10 h-10 rounded-full border-2 transition-all hover:scale-110 ${selectedColor === c.hex ? 'border-primary ring-2 ring-primary/20 scale-110' : 'border-gray-200 shadow-sm'}`}
                                    style={{ backgroundColor: c.hex }}
                                    onClick={() => setSelectedColor(c.hex)}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="w-full h-px bg-gray-100" />

                    {/* Design Elements */}
                    <div className="space-y-3">
                        <Label className="text-gray-600 font-semibold uppercase text-xs tracking-wider">Add Elements</Label>
                        <div className="grid grid-cols-2 gap-3">
                            <Button variant="outline" onClick={addText} className="flex gap-2 items-center h-12 bg-white hover:bg-green-50 hover:text-primary hover:border-green-200 transition-colors">
                                <Type className="w-4 h-4" /> Text
                            </Button>
                            <div className="relative">
                                <Button variant="outline" className="flex gap-2 items-center h-12 w-full bg-white hover:bg-green-50 hover:text-primary hover:border-green-200 transition-colors">
                                    <ImageIcon className="w-4 h-4" /> Upload
                                </Button>
                                <input
                                    type="file"
                                    accept="image/png, image/jpeg"
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                    onChange={handleImageUpload}
                                />
                            </div>
                        </div>
                        <p className="text-[10px] text-gray-500 text-center mt-1">Accepts PNG/JPG. High-res recommended.</p>
                    </div>

                    <div className="w-full h-px bg-gray-100" />

                    {/* Actions */}
                    <div className="space-y-3">
                        <Label className="text-gray-600 font-semibold uppercase text-xs tracking-wider">Canvas Actions</Label>
                        <Button variant="ghost" onClick={deleteSelected} className="w-full flex gap-2 items-center text-red-600 hover:text-red-700 hover:bg-red-50">
                            <Trash2 className="w-4 h-4" /> Delete Selected Item
                        </Button>
                    </div>

                </CardContent>

                {/* Checkout fixed to bottom of panel */}
                <div className="p-6 border-t bg-gray-50/50 mt-auto">
                    <div className="flex gap-3 mb-4">
                        <div className="flex-1">
                            <Label className="text-xs mb-1 block text-gray-500">Size</Label>
                            <select className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                                <option>XL</option>
                                <option>XXL</option>
                            </select>
                        </div>
                        <div className="flex-1">
                            <Label className="text-xs mb-1 block text-gray-500">Qty</Label>
                            <select className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5+</option>
                            </select>
                        </div>
                    </div>
                    <Button className="w-full flex gap-2 items-center h-12 bg-primary hover:bg-primary/90 text-white shadow-lg shadow-green-500/20 text-md font-bold">
                        <ShoppingCart className="w-5 h-5" /> Proceed to Cart
                    </Button>
                    <p className="text-xs text-center text-gray-500 mt-3 flex justify-center items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span> 50% deposit required
                    </p>
                </div>
            </Card>
        </div>
    );
}

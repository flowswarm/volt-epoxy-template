import { useEffect, useRef, useState } from 'react';
import { Navbar } from '../components/Layout';
import swatchesData from '../data/swatches.json';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
                src?: string;
                alt?: string;
                'camera-controls'?: boolean;
                'shadow-intensity'?: string;
                'shadow-softness'?: string;
                exposure?: string;
                'environment-image'?: string;
            }, HTMLElement>;
        }
    }
}

const Visualizer = () => {
    const modelRef = useRef<any>(null);
    const [activeColor, setActiveColor] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const viewer = modelRef.current;
        if (viewer) {
            const handleLoad = () => setIsLoading(false);
            viewer.addEventListener('load', handleLoad);
            return () => viewer.removeEventListener('load', handleLoad);
        }
    }, []);

    const handleColorChange = (hex: string) => {
        setActiveColor(hex);
        if (!modelRef.current || !modelRef.current.model) return;

        const materials = modelRef.current.model.materials;
        materials.forEach((mat: any) => {
            if (mat.name.toLowerCase().includes('floor')) {
                mat.pbrMetallicRoughness.setBaseColorFactor(hex);
            }
        });
    };

    return (
        <div className="min-h-screen flex flex-col pt-20 overflow-hidden">
            <Navbar />
            <div className="flex-grow flex flex-col md:flex-row bg-volt-gray h-[calc(100vh-80px)]">
                {/* Swatch Picker Sidebar */}
                <div className="w-full md:w-80 bg-white p-6 md:h-full overflow-y-auto border-r border-black/5 shadow-xl md:shadow-none z-10 shrink-0">
                    <h2 className="text-2xl font-bold uppercase tracking-widest mb-2">Epoxy Colors</h2>
                    <p className="opacity-60 text-sm mb-6">Select a swatch below to visualize the color on the floor in real-time.</p>

                    <div className="grid grid-cols-4 md:grid-cols-2 gap-4">
                        {swatchesData.map((swatch, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleColorChange(swatch.color)}
                                className={`group flex flex-col items-center gap-2 p-2 rounded hover:bg-black/5 transition-colors ${activeColor === swatch.color ? 'bg-black/5 ring-1 ring-volt-lime' : ''}`}
                            >
                                <div
                                    className="w-12 h-12 md:w-16 md:h-16 rounded-full shadow-inner border border-black/10 transition-transform group-hover:scale-110"
                                    style={{ backgroundColor: swatch.color }}
                                />
                                <span className="text-[10px] uppercase font-bold tracking-widest opacity-60 text-center leading-tight">Option {swatch.id}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* 3D Viewer Area */}
                <div className="flex-grow relative h-[50vh] md:h-auto bg-[#e0e0e0]">
                    <model-viewer
                        ref={modelRef}
                        src="/models/room.glb"
                        alt="3D Room Model"
                        camera-controls
                        shadow-intensity="1"
                        shadow-softness="1"
                        exposure="1"
                        environment-image="neutral"
                        style={{ width: '100%', height: '100%', backgroundColor: '#e0e0e0' }}
                    >
                        {isLoading && (
                            <div slot="progress-bar" className="absolute inset-0 flex items-center justify-center pointer-events-none bg-[#e0e0e0]/50 backdrop-blur-sm z-10">
                                <div className="bg-white px-6 py-3 rounded shadow-lg font-bold tracking-widest uppercase text-xs flex items-center gap-2">
                                    <div className="w-4 h-4 border-2 border-volt-lime border-t-transparent rounded-full animate-spin"></div>
                                    Loading Model...
                                </div>
                            </div>
                        )}
                    </model-viewer>
                </div>
            </div>
        </div>
    );
};

export default Visualizer;

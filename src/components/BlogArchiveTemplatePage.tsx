import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Download, 
  Copy, 
  Check, 
  Code2, 
  Eye, 
  BookOpen, 
  ExternalLink, 
  Share2, 
  MessageCircle, 
  Calendar, 
  Clock, 
  Search,
  Filter,
  Layers,
  Facebook,
  Instagram,
  Sparkles,
  Smartphone,
  Tablet,
  Monitor,
  FileText,
  SlidersHorizontal,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { GeneraLogo } from './BrandLogos';

interface BlogArchiveTemplatePageProps {
  onBackToHome: () => void;
  onOpenSinglePostTemplate: () => void;
}

export const BlogArchiveTemplatePage: React.FC<BlogArchiveTemplatePageProps> = ({ 
  onBackToHome,
  onOpenSinglePostTemplate
}) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'social' | 'code' | 'guide'>('preview');
  const [deviceView, setDeviceView] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [copied, setCopied] = useState(false);
  const [copiedJson, setCopiedJson] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [htmlCode, setHtmlCode] = useState<string>('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    fetch('/elementor-blog-archive.html')
      .then((res) => res.text())
      .then((data) => setHtmlCode(data))
      .catch(() => setHtmlCode('<!-- Error cargando el archivo elementor-blog-archive.html -->'));
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleCopyCode = async () => {
    try {
      if (htmlCode) {
        await navigator.clipboard.writeText(htmlCode);
      } else {
        const res = await fetch('/elementor-blog-archive.html');
        const text = await res.text();
        await navigator.clipboard.writeText(text);
      }
      setCopied(true);
      showToast('¡Código HTML copiado al portapapeles!');
      setTimeout(() => setCopied(false), 3000);
    } catch {
      setCopied(false);
    }
  };

  const handleCopyJson = async () => {
    try {
      const res = await fetch('/elementor-blog-archive-template.json');
      const text = await res.text();
      await navigator.clipboard.writeText(text);
      setCopiedJson(true);
      showToast('¡JSON de Elementor copiado al portapapeles!');
      setTimeout(() => setCopiedJson(false), 3000);
    } catch {
      setCopiedJson(false);
    }
  };

  const samplePosts = [
    {
      id: 1,
      title: '5 Señales de que tus balatas necesitan cambio urgente antes de rayar el disco',
      excerpt: 'Chillidos metálicos, pedal esponjoso o aumento de distancia de frenado. Aprende a detectar el desgaste de balatas a tiempo en Hermosillo.',
      category: 'frenos',
      categoryLabel: 'Frenos & Seguridad',
      catColor: 'text-blue-400 bg-blue-500/15 border-blue-500/30',
      date: '15 Oct, 2026',
      readTime: '5 min',
      image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80',
      tag: 'Mecánica Preventiva'
    },
    {
      id: 2,
      title: 'Luz Check Engine encendida: Qué significa cada código y por qué no debes borrarlo sin escanear',
      excerpt: 'Aprende la diferencia entre un testigo fijo y parpadeante, códigos P0300, sensores de oxígeno y el riesgo de quemar el catalizador.',
      category: 'diagnostico',
      categoryLabel: 'Diagnóstico & Sensores',
      catColor: 'text-rose-400 bg-rose-500/15 border-rose-500/30',
      date: '10 Oct, 2026',
      readTime: '7 min',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
      tag: 'Electrónica'
    },
    {
      id: 3,
      title: 'El calor de Hermosillo y tu batería: Por qué duran menos de 2 años en Sonora y cómo protegerla',
      excerpt: 'A 45°C en verano, la evaporación de ácido y la sulfatación acelerada reducen la vida útil a la mitad. Tips para alargar su rendimiento.',
      category: 'mantenimiento',
      categoryLabel: 'Mantenimiento Preventivo',
      catColor: 'text-amber-400 bg-amber-500/15 border-amber-500/30',
      date: '04 Oct, 2026',
      readTime: '4 min',
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
      tag: 'Baterías PEISA'
    },
    {
      id: 4,
      title: 'Aire Acondicionado Automotriz no enfría: Fuga de refrigerante, compresor o filtro sucio',
      excerpt: 'Claves para diagnosticar por qué tu A/C solo echa aire tibio: presiones de alta y baja, bobina del compresor y filtro de cabina tapado.',
      category: 'clima',
      categoryLabel: 'Aire Acondicionado',
      catColor: 'text-cyan-400 bg-cyan-500/15 border-cyan-500/30',
      date: '28 Sep, 2026',
      readTime: '6 min',
      image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80',
      tag: 'Carga R134a/1234yf'
    },
    {
      id: 5,
      title: 'Amortiguadores vencidos: Las 4 pruebas para saber si tu auto pierde adherencia al camino',
      excerpt: 'Si tu auto rebota en baches, se inclina en curvas o frena más largo, tus amortiguadores ya no controlan el resorte.',
      category: 'suspension',
      categoryLabel: 'Suspensión & Dirección',
      catColor: 'text-purple-400 bg-purple-500/15 border-purple-500/30',
      date: '20 Sep, 2026',
      readTime: '5 min',
      image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80',
      tag: 'Seguridad Activa'
    },
    {
      id: 6,
      title: 'Nuestra Regla de Oro: Primero diagnosticamos con datos y osciloscopio, después reparamos',
      excerpt: 'Por qué en Genera Automotriz no "adivinamos" cambiando piezas a ver si le atinamos. La ciencia detrás del diagnóstico automotriz moderno.',
      category: 'diagnostico',
      categoryLabel: 'Metodología Taller',
      catColor: 'text-emerald-400 bg-emerald-500/15 border-emerald-500/30',
      date: '12 Sep, 2026',
      readTime: '5 min',
      image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=800&q=80',
      tag: 'Genera Automotriz'
    }
  ];

  const filteredPosts = samplePosts.filter((post) => {
    const matchesCat = selectedCategory === 'todos' || post.category === selectedCategory;
    const term = searchTerm.toLowerCase().trim();
    const matchesSearch = !term || post.title.toLowerCase().includes(term) || post.excerpt.toLowerCase().includes(term);
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#07111F] text-slate-100 flex flex-col font-sans selection:bg-[#1769E0] selection:text-white">
      {/* BARRA SUPERIOR DE CONTROL Y PLANTILLAS */}
      <header className="sticky top-0 z-50 bg-[#07111F]/95 backdrop-blur-xl border-b border-slate-700/60 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
          
          {/* Logo y volver */}
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Volver a la Web</span>
            </button>

            <GeneraLogo className="h-8 hidden md:block" />

            <div className="h-5 w-[1px] bg-slate-700 hidden sm:block" />

            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider hidden sm:inline">
                Plantilla Elementor: Catálogo de Posts
              </span>
            </div>
          </div>

          {/* Selector de Plantilla: Catálogo vs Post Individual */}
          <div className="flex items-center bg-slate-900/90 p-1 rounded-xl border border-slate-800 text-xs font-semibold">
            <button
              type="button"
              className="px-3 py-1.5 rounded-lg bg-[#1769E0] text-white shadow-md flex items-center gap-1.5"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Todos los Posts (Archivo)</span>
            </button>
            <button
              type="button"
              onClick={onOpenSinglePostTemplate}
              className="px-3 py-1.5 rounded-lg text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Post Individual</span>
            </button>
          </div>

          {/* Botones de Acción Primarios */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyCode}
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 rounded-xl shadow-lg shadow-emerald-900/30 transition-all active:scale-95 border border-emerald-400/30"
              title="Copiar código HTML listo para pegar en el Widget HTML de Elementor"
            >
              {copied ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? '¡Copiado!' : 'Copiar Widget HTML'}</span>
            </button>

            <a
              href="/elementor-blog-archive-template.json"
              download="elementor-blog-archive-template.json"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-bold text-white bg-slate-800 hover:bg-slate-700 rounded-xl border border-slate-600 transition-all hover:scale-[1.02] active:scale-95"
              title="Descargar archivo JSON para importar en Elementor"
            >
              <Download className="w-4 h-4 text-blue-400" />
              <span className="hidden sm:inline">JSON</span>
            </a>

            <a
              href="/elementor-blog-archive.html"
              download="elementor-blog-archive.html"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-bold text-white bg-slate-800 hover:bg-slate-700 rounded-xl border border-slate-600 transition-all hover:scale-[1.02] active:scale-95"
              title="Descargar archivo HTML completo"
            >
              <Code2 className="w-4 h-4 text-emerald-400" />
              <span className="hidden sm:inline">HTML</span>
            </a>
          </div>
        </div>

        {/* Pestañas de Vista y Configuración */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between border-t border-slate-800/80 pt-1 pb-1">
          <div className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={() => setActiveTab('preview')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 ${
                activeTab === 'preview'
                  ? 'text-white bg-[#1769E0]/20 text-[#38BDF8] border border-[#1769E0]/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Vista Previa Interactiva</span>
            </button>

            <button
              onClick={() => setActiveTab('social')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 ${
                activeTab === 'social'
                  ? 'text-white bg-[#1769E0]/20 text-[#38BDF8] border border-[#1769E0]/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Redes (Facebook & Instagram)</span>
            </button>

            <button
              onClick={() => setActiveTab('guide')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 ${
                activeTab === 'guide'
                  ? 'text-white bg-[#1769E0]/20 text-[#38BDF8] border border-[#1769E0]/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Guía de Instalación</span>
            </button>

            <button
              onClick={() => setActiveTab('code')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 ${
                activeTab === 'code'
                  ? 'text-white bg-[#1769E0]/20 text-[#38BDF8] border border-[#1769E0]/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Ver Código HTML</span>
            </button>
          </div>

          {/* Toggle de Dispositivos (Solo en pestaña preview) */}
          {activeTab === 'preview' && (
            <div className="hidden sm:flex items-center gap-1 bg-slate-900/80 p-0.5 rounded-lg border border-slate-800">
              <button
                onClick={() => setDeviceView('desktop')}
                className={`p-1.5 rounded-md transition-colors ${
                  deviceView === 'desktop' ? 'bg-[#1769E0] text-white' : 'text-slate-400 hover:text-white'
                }`}
                title="Vista Desktop"
              >
                <Monitor className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setDeviceView('tablet')}
                className={`p-1.5 rounded-md transition-colors ${
                  deviceView === 'tablet' ? 'bg-[#1769E0] text-white' : 'text-slate-400 hover:text-white'
                }`}
                title="Vista Tablet"
              >
                <Tablet className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setDeviceView('mobile')}
                className={`p-1.5 rounded-md transition-colors ${
                  deviceView === 'mobile' ? 'bg-[#1769E0] text-white' : 'text-slate-400 hover:text-white'
                }`}
                title="Vista Móvil"
              >
                <Smartphone className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-1 pb-16">
        {/* PESTAÑA 1: VISTA PREVIA INTERACTIVA */}
        {activeTab === 'preview' && (
          <div className="w-full flex justify-center py-6 px-2 sm:px-4">
            <div 
              className={`transition-all duration-300 w-full ${
                deviceView === 'mobile' 
                  ? 'max-w-[400px] border-4 border-slate-700 rounded-3xl shadow-2xl overflow-hidden' 
                  : deviceView === 'tablet' 
                  ? 'max-w-[780px] border-4 border-slate-700 rounded-2xl shadow-2xl overflow-hidden' 
                  : 'max-w-7xl'
              }`}
            >
              {/* HERO DEL BLOG */}
              <section className="relative py-14 px-4 sm:px-8 text-center bg-gradient-to-b from-[#050C17] via-[#07111F] to-[#0A1628] border-b border-slate-800/80 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(23,105,224,0.18),transparent_60%)] pointer-events-none" />
                
                <div className="relative max-w-3xl mx-auto">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1769E0]/15 border border-[#1769E0]/40 text-[#38BDF8] text-xs font-bold uppercase tracking-wider mb-4">
                    <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
                    <span>Centro de Conocimiento Automotriz</span>
                  </div>

                  <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
                    Blog y Guías <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">Automotrices</span>
                  </h1>

                  <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-8 leading-relaxed">
                    Consejos de mecánicos especializados en Hermosillo. Aprende a prevenir fallas caras, entender los testigos de tu tablero y cuidar tu auto ante el calor sonorense.
                  </p>

                  {/* Barra de búsqueda interactiva */}
                  <div className="relative max-w-xl mx-auto mb-6">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                    <input 
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Buscar por falla, sensor, frenos, check engine, batería..."
                      className="w-full pl-12 pr-4 py-3.5 bg-slate-900/90 border border-slate-700 rounded-2xl text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#1769E0] focus:ring-2 focus:ring-[#1769E0]/30 shadow-lg"
                    />
                    {searchTerm && (
                      <button 
                        onClick={() => setSearchTerm('')}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-white bg-slate-800 px-2 py-1 rounded"
                      >
                        Limpiar
                      </button>
                    )}
                  </div>

                  {/* Filtro por Categorías */}
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    {[
                      { id: 'todos', label: 'Todos los Artículos' },
                      { id: 'frenos', label: 'Frenos & Balatas' },
                      { id: 'diagnostico', label: 'Diagnóstico & Sensores' },
                      { id: 'mantenimiento', label: 'Mantenimiento Preventivo' },
                      { id: 'clima', label: 'Aire Acondicionado' },
                      { id: 'suspension', label: 'Suspensión & Dirección' }
                    ].map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                          selectedCategory === cat.id
                            ? 'bg-[#1769E0] text-white shadow-md shadow-blue-900/50 border border-blue-400/40'
                            : 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>
              </section>

              {/* ARTÍCULO DESTACADO (HERO CARD) */}
              <section className="py-8 px-2 sm:px-0">
                <div className="bg-gradient-to-br from-slate-900 via-slate-900/95 to-[#0A1628] border border-slate-700/80 rounded-2xl overflow-hidden shadow-2xl hover:border-blue-500/50 transition-all grid grid-cols-1 lg:grid-cols-12 group">
                  <div className="lg:col-span-7 relative min-h-[260px] sm:min-h-[340px] overflow-hidden">
                    <span className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500 text-slate-950 text-xs font-black uppercase tracking-wider shadow-lg">
                      ⭐ Artículo Destacado
                    </span>
                    <img 
                      src="https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1200&q=80" 
                      alt="Discos y balatas de frenos en Genera Automotriz"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  </div>

                  <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 text-xs text-slate-400 mb-3 flex-wrap">
                      <span className="px-2.5 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-400 font-bold uppercase">
                        Frenos & Seguridad
                      </span>
                      <span>📅 Octubre 2026</span>
                      <span>⏱️ 6 min de lectura</span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors leading-snug">
                      ¿Por qué vibra el volante al frenar? Causas reales y cómo solucionarlo en Hermosillo
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                      Si al pisar el freno a más de 60 km/h sientes una vibración en el volante o pedal, el calor extremo del asfalto sonorense deforma los rotores y desgasta las balatas de forma dispareja. Conoce el diagnóstico técnico exacto.
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-800 flex-wrap gap-3">
                      <div className="flex items-center gap-2.5">
                        <img 
                          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" 
                          alt="Ing. Carlos Mendoza" 
                          className="w-9 h-9 rounded-full object-cover border-2 border-blue-500" 
                        />
                        <div>
                          <div className="text-xs font-bold text-white">Ing. Carlos Mendoza</div>
                          <div className="text-[11px] text-slate-400">Diagnóstico Automotriz</div>
                        </div>
                      </div>

                      <button
                        onClick={onOpenSinglePostTemplate}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-lg shadow-blue-900/40 transition-all hover:scale-105"
                      >
                        <span>Ver Plantilla Post</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* GRID DE ARTÍCULOS */}
              <section className="py-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2.5">
                    <h2 className="text-lg sm:text-xl font-bold text-white">Catálogo de Publicaciones</h2>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                      {filteredPosts.length} artículos
                    </span>
                  </div>

                  <span className="text-xs text-slate-400 hidden sm:inline">
                    Mostrando resultados en tiempo real
                  </span>
                </div>

                {filteredPosts.length === 0 ? (
                  <div className="text-center py-16 bg-slate-900/50 rounded-2xl border border-dashed border-slate-800 p-8">
                    <AlertCircle className="w-10 h-10 text-slate-500 mx-auto mb-3" />
                    <h3 className="text-base font-bold text-white mb-1">No se encontraron artículos</h3>
                    <p className="text-xs text-slate-400 mb-4">Intenta cambiar el término de búsqueda o selecciona otra categoría.</p>
                    <button
                      onClick={() => { setSearchTerm(''); setSelectedCategory('todos'); }}
                      className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold"
                    >
                      Restablecer filtros
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredPosts.map((post) => (
                      <article 
                        key={post.id}
                        className="bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 rounded-2xl overflow-hidden flex flex-col group transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:shadow-blue-950/40"
                      >
                        {/* Imagen con badges y botones de compartir rápido */}
                        <div className="relative h-48 overflow-hidden bg-slate-950">
                          <span className={`absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide border ${post.catColor}`}>
                            {post.categoryLabel}
                          </span>

                          <div className="absolute top-3 right-3 z-10 flex gap-1.5 opacity-90">
                            <button
                              onClick={() => showToast(`Enlace de "${post.title}" listo para compartir en Facebook`)}
                              className="w-7 h-7 rounded-lg bg-[#1877F2] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-md"
                              title="Compartir en Facebook"
                            >
                              <Facebook className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => showToast(`Enlace de "${post.title}" listo para compartir en WhatsApp`)}
                              className="w-7 h-7 rounded-lg bg-[#25D366] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-md"
                              title="Compartir en WhatsApp"
                            >
                              <MessageCircle className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <img 
                            src={post.image} 
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                          />
                        </div>

                        {/* Cuerpo de la Card */}
                        <div className="p-5 flex flex-col flex-1">
                          <div className="flex items-center gap-3 text-[11px] text-slate-400 mb-2">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3 text-slate-500" />
                              {post.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3 text-slate-500" />
                              {post.readTime}
                            </span>
                          </div>

                          <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-2 mb-2">
                            {post.title}
                          </h3>

                          <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed mb-4 flex-1">
                            {post.excerpt}
                          </p>

                          <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                            <span className="text-xs font-bold text-sky-400 group-hover:text-blue-400 flex items-center gap-1">
                              <span>Leer artículo</span>
                              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <span className="text-[11px] text-slate-500">{post.tag}</span>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                )}
              </section>

              {/* CAJA DE SUSCRIPCIÓN / BOLETÍN */}
              <section className="my-8 p-6 sm:p-10 rounded-2xl bg-gradient-to-r from-blue-900/30 via-slate-900 to-slate-900 border border-blue-500/40 text-center relative overflow-hidden">
                <div className="max-w-xl mx-auto">
                  <div className="w-10 h-10 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center mx-auto mb-3 border border-blue-500/30">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    ¿Quieres recibir guías automotrices para Hermosillo?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mb-5 leading-relaxed">
                    Recibe recordatorios de mantenimiento estacional, alertas de fallas comunes y tips exclusivos directamente en tu WhatsApp.
                  </p>
                  <a
                    href="https://wa.me/526622000000?text=Hola%20Genera%20Automotriz,%20quiero%20recibir%20tips%20de%20mantenimiento%20y%20promociones"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white text-sm font-bold shadow-lg shadow-emerald-950/50 transition-all hover:scale-105"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Unirme al canal de WhatsApp</span>
                  </a>
                </div>
              </section>

              {/* PAGINACIÓN VISUAL */}
              <div className="flex items-center justify-center gap-2 py-4">
                <button className="w-9 h-9 rounded-xl bg-blue-600 text-white font-bold text-xs shadow-md">1</button>
                <button onClick={() => showToast('Página 2 cargada')} className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white font-bold text-xs">2</button>
                <button onClick={() => showToast('Página 3 cargada')} className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white font-bold text-xs">3</button>
                <button onClick={() => showToast('Página siguiente')} className="px-3.5 h-9 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white font-bold text-xs flex items-center gap-1">
                  <span>Siguiente</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>
        )}

        {/* PESTAÑA 2: SIMULADOR DE REDES SOCIALES */}
        {activeTab === 'social' && (
          <div className="max-w-5xl mx-auto py-8 px-4">
            <div className="text-center mb-8">
              <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider">
                Optimización de Tráfico Social
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 mb-2">
                Simulador de Publicación en Redes
              </h2>
              <p className="text-slate-400 text-sm max-w-xl mx-auto">
                Mira cómo se ven los artículos de tu catálogo cuando tus lectores los comparten en Facebook e Instagram.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Tarjeta de Facebook */}
              <div className="bg-[#18191a] border border-[#3a3b3c] rounded-2xl p-5 shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center font-bold">
                    <Facebook className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#e4e6eb]">Genera Automotriz Hermosillo</div>
                    <div className="text-xs text-[#b0b3b8]">Publicado por Página · Hace 1 hora · 🌐</div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#e4e6eb] mb-3 leading-relaxed">
                  ¿Sientes que el volante vibra al frenar a más de 60 km/h? 🚗⚠️ En el asfalto caliente de Hermosillo, los discos alabados son una de las fallas más comunes. Lee la guía completa en nuestro blog con los pasos de diagnóstico antes de gastar en rectificados.
                </p>

                {/* OpenGraph Preview Box */}
                <div className="rounded-xl border border-[#3a3b3c] overflow-hidden bg-[#242526]">
                  <img 
                    src="https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1000&q=80" 
                    alt="Facebook Card" 
                    className="w-full h-44 object-cover"
                  />
                  <div className="p-3">
                    <div className="text-[11px] uppercase tracking-wider text-[#b0b3b8]">GENERA AUTOMOTRIZ · HERMOSILLO</div>
                    <div className="text-sm font-bold text-[#e4e6eb] mt-0.5 line-clamp-1">
                      ¿Por qué vibra el volante al frenar? Causas reales y solución
                    </div>
                    <div className="text-xs text-[#b0b3b8] mt-1 line-clamp-1">
                      Aprende a diferenciar discos alabados, balatas desgastadas y bujes flojos.
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#3a3b3c] flex items-center justify-around text-xs text-[#b0b3b8]">
                  <span>👍 84 Me gusta</span>
                  <span>💬 19 Comentarios</span>
                  <span>↗️ 32 Veces compartido</span>
                </div>
              </div>

              {/* Tarjeta de Instagram Feed / Stories */}
              <div className="bg-[#121212] border border-[#262626] rounded-2xl p-5 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full p-[2px] bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]">
                      <div className="w-full h-full rounded-full bg-black flex items-center justify-center p-0.5">
                        <img 
                          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" 
                          alt="Avatar" 
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white flex items-center gap-1.5">
                        <span>generaautomotriz</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 inline" />
                      </div>
                      <div className="text-xs text-slate-400">Hermosillo, Sonora</div>
                    </div>
                  </div>
                  <Instagram className="w-5 h-5 text-pink-500" />
                </div>

                <div className="rounded-xl overflow-hidden aspect-square relative bg-slate-900 mb-3">
                  <img 
                    src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80" 
                    alt="Instagram Post" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 left-3 right-3 bg-black/75 backdrop-blur-md p-3 rounded-xl border border-white/10 text-white text-xs">
                    <div className="font-black text-amber-400 uppercase text-[10px] tracking-wider">NUEVO EN EL BLOG 🛠️</div>
                    <div className="font-bold text-sm">5 Señales de que tus balatas necesitan cambio urgente</div>
                  </div>
                </div>

                <div className="text-xs text-slate-300 leading-relaxed">
                  <span className="font-bold text-white mr-1.5">generaautomotriz</span>
                  Si escuchas un rechinido metálico cada que te detienes, ¡no lo dejes pasar! En nuestro nuevo artículo te mostramos cómo evitar dañar los discos... 🔗 Link en bio para leer completo.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PESTAÑA 3: GUÍA DE INSTALACIÓN EN ELEMENTOR */}
        {activeTab === 'guide' && (
          <div className="max-w-4xl mx-auto py-8 px-4">
            <div className="text-center mb-8">
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                Paso a Paso sin Errores
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 mb-2">
                Cómo Usar Esta Plantilla en WordPress & Elementor
              </h2>
              <p className="text-slate-400 text-sm max-w-xl mx-auto">
                Elige el método que más te convenga. Recomendamos el Método 1 (Widget HTML) porque no da ningún error de permisos ni de JSON en WordPress.
              </p>
            </div>

            <div className="space-y-6">
              {/* Método 1: Widget HTML (Más Rápido y 100% Infalible) */}
              <div className="bg-slate-900/90 border border-emerald-500/40 rounded-2xl p-6 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-emerald-500 text-slate-950 font-black text-xs px-4 py-1 rounded-bl-xl uppercase tracking-wider">
                  Recomendado · 10 Segundos
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold border border-emerald-500/30">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Método 1: Pegar en Widget HTML (Sin Subir Archivos)</h3>
                    <p className="text-xs text-slate-400">Funciona en cualquier versión de Elementor (Gratis o Pro) y en cualquier tema.</p>
                  </div>
                </div>

                <ol className="list-decimal list-inside space-y-2.5 text-xs sm:text-sm text-slate-300">
                  <li>
                    Haz clic en el botón superior verde <strong className="text-emerald-400">"Copiar Widget HTML"</strong> (o descarga el archivo <code className="bg-slate-800 px-1.5 py-0.5 rounded text-white">elementor-blog-archive.html</code>).
                  </li>
                  <li>
                    En tu panel de WordPress, crea una nueva Página llamada <strong className="text-white">"Blog"</strong> o <strong className="text-white">"Noticias"</strong>.
                  </li>
                  <li>
                    Edita esa página con <strong>Elementor</strong>. En los ajustes de la página (icono de engranaje inferior), pon el ancho en <strong>"Elementor Ancho Completo"</strong> (Elementor Full Width).
                  </li>
                  <li>
                    En el panel de widgets de Elementor, busca el widget nativo <strong className="text-white">"HTML"</strong> y arrástralo al lienzo.
                  </li>
                  <li>
                    Pega el código copiado en el campo HTML y haz clic en <strong>Publicar</strong>.
                  </li>
                </ol>

                <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between flex-wrap gap-3">
                  <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    Cero conflictos con Astra, Hello Elementor o plugins de caché.
                  </span>
                  <button
                    onClick={handleCopyCode}
                    className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all"
                  >
                    {copied ? '¡Código Copiado!' : 'Copiar Código HTML'}
                  </button>
                </div>
              </div>

              {/* Método 2: Importar Plantilla JSON */}
              <div className="bg-slate-900/90 border border-slate-700/80 rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold border border-blue-500/30">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Método 2: Importar el Archivo JSON en Plantillas Guardadas</h3>
                    <p className="text-xs text-slate-400">Si deseas guardarlo en la biblioteca nativa de plantillas de WordPress.</p>
                  </div>
                </div>

                <ol className="list-decimal list-inside space-y-2.5 text-xs sm:text-sm text-slate-300">
                  <li>
                    Descarga el archivo haciendo clic en el botón superior <strong className="text-blue-400">"JSON"</strong> (<code className="bg-slate-800 px-1.5 py-0.5 rounded text-white">elementor-blog-archive-template.json</code>).
                  </li>
                  <li>
                    Ve a tu escritorio de WordPress (en el panel de administración, <strong>fuera del editor visual</strong>).
                  </li>
                  <li>
                    Navega a: <strong className="text-white">Plantillas &gt; Plantillas guardadas</strong>.
                  </li>
                  <li>
                    En la barra superior, haz clic en el botón <strong className="text-white">"Importar plantillas"</strong>.
                  </li>
                  <li>
                    Selecciona el archivo JSON y pulsa <strong>"Importar ahora"</strong>.
                  </li>
                  <li>
                    ¡Listo! Ahora al crear cualquier página, podrás insertarla desde tu pestaña "Mis Plantillas".
                  </li>
                </ol>
              </div>
            </div>
          </div>
        )}

        {/* PESTAÑA 4: CÓDIGO HTML */}
        {activeTab === 'code' && (
          <div className="max-w-5xl mx-auto py-8 px-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-lg font-bold text-white">Código HTML Autocontenido (Elementor Widget)</h2>
                <p className="text-xs text-slate-400">Clases aisladas bajo el prefijo <code className="text-sky-400">ga-ba-*</code>.</p>
              </div>

              <button
                onClick={handleCopyCode}
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5 transition-all"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? '¡Copiado!' : 'Copiar Todo el Código'}</span>
              </button>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 overflow-x-auto max-h-[600px] text-xs font-mono text-slate-300 shadow-inner">
              <pre>{htmlCode || 'Cargando código del archivo /elementor-blog-archive.html...'}</pre>
            </div>
          </div>
        )}
      </main>

      {/* TOAST FLOTANTE */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white border border-blue-500/50 shadow-2xl px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 animate-bounce">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
};

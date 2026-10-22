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
  ShieldCheck, 
  AlertTriangle, 
  Lightbulb, 
  CheckCircle2, 
  ChevronRight,
  Sparkles,
  Smartphone,
  Send,
  ThumbsUp,
  MessageSquare,
  Bookmark,
  Heart,
  MoreHorizontal,
  Layers,
  Facebook,
  Instagram,
  Tag,
  Globe
} from 'lucide-react';
import { GeneraLogo } from './BrandLogos';

interface BlogPostTemplatePageProps {
  onBackToHome: () => void;
  onOpenBlogArchive?: () => void;
}

export const BlogPostTemplatePage: React.FC<BlogPostTemplatePageProps> = ({ onBackToHome, onOpenBlogArchive }) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'social' | 'code' | 'guide'>('preview');
  const [copied, setCopied] = useState(false);
  const [copiedJson, setCopiedJson] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedIgCaption, setCopiedIgCaption] = useState(false);
  const [copiedFbCaption, setCopiedFbCaption] = useState(false);
  const [copiedOgMeta, setCopiedOgMeta] = useState(false);
  const [socialSimulatorView, setSocialSimulatorView] = useState<'facebook' | 'instagram'>('facebook');
  const [showIgModalInPreview, setShowIgModalInPreview] = useState(false);
  const [readProgress, setReadProgress] = useState(0);
  const [htmlCode, setHtmlCode] = useState<string>('');

  // Fetch the elementor-single-post.html content for viewing and copying
  useEffect(() => {
    fetch('/elementor-single-post.html')
      .then((res) => res.text())
      .then((data) => setHtmlCode(data))
      .catch(() => setHtmlCode('<!-- Error cargando el archivo elementor-single-post.html -->'));
  }, []);

  // Reading progress tracker
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
        setReadProgress(progress);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyCode = async () => {
    try {
      if (htmlCode) {
        await navigator.clipboard.writeText(htmlCode);
      } else {
        const res = await fetch('/elementor-single-post.html');
        const text = await res.text();
        await navigator.clipboard.writeText(text);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      setCopied(false);
    }
  };

  const handleCopyJson = async () => {
    try {
      const res = await fetch('/elementor-single-post-template.json');
      const text = await res.text();
      await navigator.clipboard.writeText(text);
      setCopiedJson(true);
      setTimeout(() => setCopiedJson(false), 3000);
    } catch {
      setCopiedJson(false);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleDownloadJson = () => {
    const a = document.createElement('a');
    a.href = '/elementor-single-post-template.json';
    a.download = 'elementor-single-post-template.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleDownloadSectionJson = () => {
    const a = document.createElement('a');
    a.href = '/elementor-single-post-section.json';
    a.download = 'elementor-single-post-section.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleDownloadHtml = () => {
    const a = document.createElement('a');
    a.href = '/elementor-single-post.html';
    a.download = 'elementor-single-post.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const igCaptionText = `¿Chirrido agudo al frenar o pedal esponjoso en Hermosillo? 🚨🔥

Con el calor extremo de Sonora superando los 45°C, las balatas y discos sufren un desgaste acelerado sin que te des cuenta. Aquí te dejamos 3 señales críticas de alerta:

1️⃣ Chirrido metálico constante: El testigo acústico avisa que a la balata le quedan menos de 3mm.
2️⃣ Pedal que se hunde o da sensación de esponja: Burbujas de aire o líquido de frenos degradado por humedad.
3️⃣ Vibración en el volante al frenar a más de 60 km/h: Discos alabeados por choques térmicos.

🛡️ En Genera Automotriz cuidamos tu bolsillo y tu seguridad: "Primero diagnosticamos, tú autorizas y después reparamos".

👉 Lee la guía técnica completa en el enlace de nuestro perfil o agenda tu diagnóstico preventivo por WhatsApp al 662 433 0056.

#Hermosillo #Sonora #MecanicaHermosillo #TallerMecanico #GeneraAutomotriz #FrenosSeguros #AutosHermosillo #MantenimientoAutomotriz #FrenosABS #TalleresHermosillo`;

  const fbPostText = `🚨 ¡CUIDADO CONDUCTORES DE HERMOSILLO! 🚨
¿Has escuchado un chirrido agudo al frenar o has sentido que el pedal se va más al fondo de lo normal? Con temperaturas de más de 45°C en el asfalto sonorense, el sistema de frenos trabaja al límite.

Compartimos esta nueva guía técnica gratuita donde nuestros especialistas te explican paso a paso cómo detectar:
✅ Desgaste crítico en balatas antes de dañar los discos de freno.
✅ Por qué el pedal se siente esponjoso y cuándo cambiar el líquido DOT 3 / DOT 4.
✅ Causas de la vibración en el volante al frenar en bulevares principales.

En Genera Automotriz aplicamos nuestra garantía: "Primero diagnosticamos, tú autorizas y después reparamos".

👇 Lee el artículo completo aquí:
https://generaautomotriz.com/blog/senales-cambio-frenos-hermosillo

📲 O agenda tu revisión sin compromiso al WhatsApp: 662 433 0056`;

  const ogMetaTagsSnippet = `<!-- METAETIQUETAS OPEN GRAPH PARA FACEBOOK & INSTAGRAM -->
<meta property="og:locale" content="es_MX" />
<meta property="og:type" content="article" />
<meta property="og:site_name" content="Genera Automotriz Hermosillo" />
<meta property="og:title" content="5 Señales de que los Frenos de tu Auto Necesitan Cambio Inmediato en Hermosillo" />
<meta property="og:description" content="¿Chirrido al frenar o pedal esponjoso? Conoce las alertas críticas del calor extremo en Sonora. Diagnóstico garantizado en Genera Automotriz." />
<meta property="og:url" content="https://generaautomotriz.com/blog/senales-cambio-frenos-hermosillo" />
<meta property="og:image" content="https://generaautomotriz.com/images/balatas.jpg" />
<meta property="og:image:secure_url" content="https://generaautomotriz.com/images/balatas.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:type" content="image/jpeg" />
<meta property="article:publisher" content="https://www.facebook.com/GeneraAutomotriz" />
<meta property="article:section" content="Frenos y Mecánica" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="5 Señales de que los Frenos de tu Auto Necesitan Cambio Inmediato en Hermosillo" />
<meta name="twitter:description" content="Diagnóstico garantizado y rectificado de discos en Hermosillo Sonora. Genera Automotriz." />
<meta name="twitter:image" content="https://generaautomotriz.com/images/balatas.jpg" />`;

  const handleCopyIgCaption = async () => {
    try {
      await navigator.clipboard.writeText(igCaptionText);
      setCopiedIgCaption(true);
      setTimeout(() => setCopiedIgCaption(false), 2500);
    } catch {
      setCopiedIgCaption(false);
    }
  };

  const handleCopyFbCaption = async () => {
    try {
      await navigator.clipboard.writeText(fbPostText);
      setCopiedFbCaption(true);
      setTimeout(() => setCopiedFbCaption(false), 2500);
    } catch {
      setCopiedFbCaption(false);
    }
  };

  const handleCopyOgMeta = async () => {
    try {
      await navigator.clipboard.writeText(ogMetaTagsSnippet);
      setCopiedOgMeta(true);
      setTimeout(() => setCopiedOgMeta(false), 2500);
    } catch {
      setCopiedOgMeta(false);
    }
  };

  const handleShareFacebookDirect = () => {
    const url = encodeURIComponent(window.location.origin + '/blog/senales-cambio-frenos-hermosillo');
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      'fbShare',
      'width=650,height=480,toolbar=0,menubar=0,location=0'
    );
  };

  return (
    <div className="min-h-screen bg-[#07111F] text-slate-100 flex flex-col font-sans selection:bg-[#1769E0] selection:text-white">
      {/* Laser Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-[3.5px] bg-gradient-to-r from-[#164B9B] via-[#1769E0] to-[#38BDF8] z-50 transition-all duration-75 shadow-[0_0_12px_rgba(23,105,224,0.8)]"
        style={{ width: `${readProgress}%` }}
      />

      {/* Top Floating Control Bar */}
      <nav className="sticky top-0 z-40 bg-[#07111F]/95 backdrop-blur-xl border-b border-slate-800 shadow-xl py-3 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-all cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Volver a Inicio</span>
            </button>
            <div className="h-5 w-px bg-slate-700 hidden sm:block" />
            <span className="px-3 py-1 rounded-lg text-xs font-bold bg-[#1769E0]/20 text-[#60A5FA] border border-[#1769E0]/30 hidden sm:inline-flex items-center gap-1.5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
              <span>Plantilla Single Post (Entrada de Blog)</span>
            </span>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-slate-800">
            <button
              type="button"
              onClick={() => setActiveTab('preview')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'preview'
                  ? 'bg-[#1769E0] text-white shadow-md shadow-[#1769E0]/40'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Vista Previa</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('social')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'social'
                  ? 'bg-gradient-to-r from-[#1877F2] via-[#7B2CBF] to-[#E1306C] text-white shadow-md shadow-pink-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Facebook & Instagram</span>
              <span className="hidden sm:inline-block px-1.5 py-0.2 rounded text-[9px] font-black tracking-wider uppercase bg-white/20 text-white">
                Social
              </span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('code')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'code'
                  ? 'bg-[#1769E0] text-white shadow-md shadow-[#1769E0]/40'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Código HTML</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('guide')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'guide'
                  ? 'bg-[#1769E0] text-white shadow-md shadow-[#1769E0]/40'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Cómo Importar</span>
            </button>
          </div>

          {/* Quick Actions (Download & Copy) */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleDownloadJson}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-[#164B9B] to-[#1769E0] hover:brightness-110 border border-blue-400/30 transition-all shadow-md shadow-[#1769E0]/20 cursor-pointer"
              title="Descargar archivo JSON para Elementor"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Descargar</span> JSON
            </button>
            <button
              type="button"
              onClick={handleCopyCode}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all border cursor-pointer ${
                copied
                  ? 'bg-emerald-600 text-white border-emerald-500'
                  : 'bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700 border-slate-700'
              }`}
              title="Copiar código HTML al portapapeles"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? '¡Copiado!' : 'Copiar HTML'}</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content Area based on Tab */}
      <main className="flex-1 max-w-6xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        {/* =========================================================
            TAB 1: LIVE INTERACTIVE PREVIEW
            ========================================================= */}
        {activeTab === 'preview' && (
          <div className="space-y-6">
            {/* Template Notice Banner */}
            <div className="bg-gradient-to-r from-[#0C1F3D] via-[#0E274D] to-[#0A172B] border border-[#1769E0]/40 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-lg shadow-[#1769E0]/10">
              <div className="flex items-start sm:items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#1769E0]/20 border border-[#1769E0]/40 text-[#60A5FA] shrink-0">
                  <Eye className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                    Plantilla Single Post para Blog · Genera Automotriz
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Diseñada para convertir lectores en citas de taller por WhatsApp. 100% aislada (scoped) para evitar conflictos con temas de WordPress.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href="/elementor-single-post.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Abrir en Pestaña Limpia</span>
                </a>
              </div>
            </div>

            {/* Direct Solution Alert for 'This source does not support import' */}
            <div className="bg-gradient-to-r from-emerald-950/70 via-slate-900/90 to-blue-950/60 border border-emerald-500/40 rounded-2xl p-4 sm:p-5 shadow-xl">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                      ¿Te apareció el error &ldquo;This source does not support import&rdquo; en Elementor?
                    </h3>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed max-w-2xl">
                      <strong>Usa el Método Widget HTML (100% infalible):</strong> No necesitas subir archivos JSON ni tocar permisos de WordPress. Solo copia el código HTML abajo, arrastra un widget <strong>&ldquo;HTML&rdquo;</strong> en tu entrada de Elementor y pégalo. ¡Queda idéntico y sin fallos!
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={handleCopyCode}
                    className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-lg transition-all cursor-pointer ${
                      copied 
                        ? 'bg-emerald-600 text-white shadow-emerald-600/30' 
                        : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-emerald-500/20 font-extrabold'
                    }`}
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? '¡Código Copiado!' : 'Copiar Código HTML Widget'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('guide')}
                    className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Ver Guía</span>
                  </button>
                </div>
              </div>
            </div>

            {/* The Actual Post Article Wrapper */}
            <article className="max-w-3xl mx-auto bg-[#07111F] rounded-3xl border border-slate-800/80 p-5 sm:p-8 md:p-10 shadow-2xl relative">
              {/* Breadcrumbs */}
              <nav className="flex items-center flex-wrap gap-2 text-xs sm:text-sm text-slate-400 mb-6">
                <a href="#inicio" onClick={(e) => { e.preventDefault(); onBackToHome(); }} className="hover:text-[#38BDF8] transition-colors">Inicio</a>
                <span className="text-slate-600">/</span>
                <span className="text-slate-400">Blog</span>
                <span className="text-slate-600">/</span>
                <span className="text-slate-400">Frenos y Mecánica</span>
                <span className="text-slate-600">/</span>
                <span className="text-slate-200 font-medium truncate max-w-[200px] sm:max-w-none">
                  5 Señales de que los Frenos Necesitan Cambio
                </span>
              </nav>

              {/* Badges */}
              <div className="flex items-center gap-2.5 flex-wrap mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#1769E0]/15 border border-[#1769E0]/40 text-[#60A5FA]">
                  <Sparkles className="w-3 h-3" />
                  Mantenimiento Preventivo
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Revisión Certificada
                </span>
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-6">
                5 Señales de que los Frenos de tu Auto Necesitan Cambio Inmediato en Hermosillo
              </h1>

              {/* Meta: Author, Date, Reading Time */}
              <div className="flex items-center justify-between flex-wrap gap-4 py-4 border-y border-slate-800/90 mb-8">
                <div className="flex items-center gap-3">
                  <img
                    src="/images/mecanico01.jpg"
                    alt="Mecánico Certificado Genera Automotriz"
                    className="w-11 h-11 rounded-full object-cover border-2 border-[#1769E0] shadow-md shadow-[#1769E0]/30"
                  />
                  <div>
                    <div className="text-sm font-bold text-white">Equipo Técnico Genera</div>
                    <div className="text-xs text-slate-400">Especialistas en Diagnóstico y Frenos · Hermosillo, Son.</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-slate-500" />
                    <span>Octubre 2024</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-slate-500" />
                    <span>5 min de lectura</span>
                  </div>
                </div>
              </div>

              {/* Featured Image */}
              <div className="rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl mb-8 group bg-slate-900">
                <img
                  src="/images/balatas.jpg"
                  alt="Revisión de balatas y rectificado de discos en Hermosillo"
                  className="w-full h-auto max-h-[460px] object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="py-2.5 px-4 bg-slate-900/90 text-xs text-slate-400 text-center italic border-t border-slate-800">
                  Inspección minuciosa del grosor de balatas y rectificado de discos en nuestro taller en Hermosillo.
                </div>
              </div>

              {/* Social Share Bar */}
              <div className="flex items-center justify-between flex-wrap gap-3 bg-slate-900/70 border border-slate-800 p-3.5 rounded-2xl mb-8">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                  <Share2 className="w-4 h-4 text-[#38BDF8]" />
                  Compartir guía:
                </span>
                <div className="flex items-center gap-2 flex-wrap">
                  <a
                    href="https://api.whatsapp.com/send?text=Te%20comparto%20esta%20gu%C3%ADa%20de%20frenos%20de%20Genera%20Automotriz%20en%20Hermosillo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-all shadow-md shadow-emerald-600/30"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    WhatsApp
                  </a>
                  <button
                    type="button"
                    onClick={handleShareFacebookDirect}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-white bg-[#1877F2] hover:bg-blue-600 transition-all shadow-md shadow-blue-600/30 cursor-pointer"
                  >
                    <Facebook className="w-3.5 h-3.5" />
                    Facebook
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowIgModalInPreview(true)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] hover:brightness-110 transition-all shadow-md shadow-pink-600/30 cursor-pointer"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    Instagram
                  </button>
                  <button
                    type="button"
                    onClick={handleCopyLink}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-white bg-[#1769E0] hover:bg-blue-600 transition-all cursor-pointer shadow-md shadow-[#1769E0]/30"
                  >
                    {copiedLink ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedLink ? '¡Enlace copiado!' : 'Copiar enlace'}</span>
                  </button>
                </div>
              </div>

              {/* Table of Contents */}
              <div className="bg-slate-900/80 border border-[#1769E0]/30 rounded-2xl p-5 mb-8 shadow-lg">
                <div className="text-xs font-bold uppercase tracking-wider text-[#60A5FA] mb-3 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  Contenido de esta guía
                </div>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-center gap-2 hover:text-[#38BDF8] transition-colors cursor-pointer">
                    <span className="w-5 h-5 rounded-md bg-[#1769E0]/20 text-[#60A5FA] text-xs font-bold flex items-center justify-center">1</span>
                    <a href="#senial-1" className="hover:underline">Chirrido metálico agudo al pisar el pedal</a>
                  </li>
                  <li className="flex items-center gap-2 hover:text-[#38BDF8] transition-colors cursor-pointer">
                    <span className="w-5 h-5 rounded-md bg-[#1769E0]/20 text-[#60A5FA] text-xs font-bold flex items-center justify-center">2</span>
                    <a href="#senial-2" className="hover:underline">El pedal se siente esponjoso o se va hasta el fondo</a>
                  </li>
                  <li className="flex items-center gap-2 hover:text-[#38BDF8] transition-colors cursor-pointer">
                    <span className="w-5 h-5 rounded-md bg-[#1769E0]/20 text-[#60A5FA] text-xs font-bold flex items-center justify-center">3</span>
                    <a href="#senial-3" className="hover:underline">Vibración en el volante al frenar a más de 60 km/h</a>
                  </li>
                  <li className="flex items-center gap-2 hover:text-[#38BDF8] transition-colors cursor-pointer">
                    <span className="w-5 h-5 rounded-md bg-[#1769E0]/20 text-[#60A5FA] text-xs font-bold flex items-center justify-center">4</span>
                    <a href="#senial-4" className="hover:underline">El auto se jala hacia un lado al frenar</a>
                  </li>
                  <li className="flex items-center gap-2 hover:text-[#38BDF8] transition-colors cursor-pointer">
                    <span className="w-5 h-5 rounded-md bg-[#1769E0]/20 text-[#60A5FA] text-xs font-bold flex items-center justify-center">5</span>
                    <a href="#senial-5" className="hover:underline">Olor a quemado después de conducir en calor extremo</a>
                  </li>
                </ul>
              </div>

              {/* Article Content */}
              <div className="prose prose-invert max-w-none text-slate-300 text-base leading-relaxed space-y-6">
                <p className="text-lg text-slate-100 font-medium border-l-4 border-[#1769E0] pl-4 py-1">
                  El calor extremo de Hermosillo y el tráfico diario someten al sistema de frenos a temperaturas superiores a los 300°C. Ignorar un sonido o cambio en el pedal puede convertir una simple reposición de balatas en un costoso reemplazo de discos o calipers.
                </p>

                <p>
                  En <strong className="text-white">Genera Automotriz</strong> creemos firmemente en nuestra regla de oro: <em className="text-blue-300">"Primero diagnosticamos, tú autorizas y después reparamos"</em>. Antes de gastar en refacciones innecesarias, te explicamos cómo identificar con precisión qué le ocurre a tu vehículo.
                </p>

                {/* Section 1 */}
                <h2 id="senial-1" className="text-xl sm:text-2xl font-bold text-white pt-4 pb-2 border-b border-slate-800">
                  1. Chirrido metálico agudo al pisar el pedal
                </h2>
                <p>
                  La mayoría de las balatas modernas cuentan con una pequeña lámina metálica llamada testigo de desgaste. Cuando la pasta de fricción llega a menos de 3 milímetros de espesor, este testigo roza contra el disco para avisarte acústicamente que ha llegado el momento de cambiarlas.
                </p>

                {/* Callout Warning */}
                <div className="bg-red-500/10 border border-red-500/40 border-l-4 border-l-red-500 rounded-xl p-4 my-4">
                  <div className="flex items-center gap-2 text-red-400 font-bold text-sm mb-1 uppercase tracking-wider">
                    <AlertTriangle className="w-4 h-4" />
                    ¡Atención Inmediata!
                  </div>
                  <p className="text-red-200 text-sm m-0">
                    Si el chirrido se transforma en un rechinido áspero y crujiente ("metal contra metal"), la balata se ha desgastado por completo y el soporte de hierro está destruyendo la superficie de tu disco de freno.
                  </p>
                </div>

                {/* Section 2 */}
                <h2 id="senial-2" className="text-xl sm:text-2xl font-bold text-white pt-4 pb-2 border-b border-slate-800">
                  2. El pedal se siente esponjoso o se va hasta el fondo
                </h2>
                <p>
                  Al pisar el freno, la respuesta debe ser firme e inmediata. Si sientes que el pedal baja más de lo normal o da una sensación de "esponja", generalmente significa:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-slate-300">
                  <li>Presencia de burbujas de aire en las líneas hidráulicas.</li>
                  <li>Líquido de frenos degradado con humedad acumulada por condensación.</li>
                  <li>Fuga en cilindro maestro o mangueras de freno.</li>
                </ul>

                {/* Callout Tip */}
                <div className="bg-[#1769E0]/10 border border-[#1769E0]/40 border-l-4 border-l-[#1769E0] rounded-xl p-4 my-4">
                  <div className="flex items-center gap-2 text-[#60A5FA] font-bold text-sm mb-1 uppercase tracking-wider">
                    <Lightbulb className="w-4 h-4" />
                    Consejo de Taller Genera
                  </div>
                  <p className="text-blue-100 text-sm m-0">
                    En Hermosillo recomendamos cambiar el líquido de frenos (DOT 3 o DOT 4 según el fabricante) cada 2 años o 40,000 km, ya que el líquido absorbe humedad ambiental y pierde su punto de ebullición.
                  </p>
                </div>

                {/* Section 3 */}
                <h2 id="senial-3" className="text-xl sm:text-2xl font-bold text-white pt-4 pb-2 border-b border-slate-800">
                  3. Vibración en el volante al frenar a más de 60 km/h
                </h2>
                <p>
                  Si vas circulando por el Periférico Norte o Blvd. Solidaridad y al frenar notas que el volante tiembla con fuerza, es un síntoma clásico de <strong className="text-white">discos alabeados (ondulados)</strong>.
                </p>
                <p>
                  El cambio brusco de temperatura provoca deformaciones microscópicas en el acero. En nuestro taller realizamos rectificado computarizado con precisión micrométrica para devolverle una superficie 100% plana.
                </p>

                {/* Quote */}
                <blockquote className="bg-slate-900/90 border border-slate-700/80 rounded-2xl p-5 my-6 italic text-slate-200 text-base">
                  "Un sistema de frenos en buen estado no solo evita colisiones; reduce la distancia de frenado de emergencia hasta en un 40% en pavimento caliente."
                  <div className="mt-2 text-right not-italic font-bold text-xs text-[#38BDF8]">
                    — Ing. Mecánico, Genera Automotriz Hermosillo
                  </div>
                </blockquote>

                {/* Section 4 & 5 */}
                <h2 id="senial-4" className="text-xl sm:text-2xl font-bold text-white pt-4 pb-2 border-b border-slate-800">
                  4. El auto se jala hacia un lado al frenar
                </h2>
                <p>
                  Cuando el vehículo tiende a desviarse hacia el carril izquierdo o derecho al aplicar los frenos, suele deberse a un émbolo de mordaza (caliper) atascado, un desgaste desigual de pastillas o problemas en la alineación y suspensión delantera.
                </p>

                <h2 id="senial-5" className="text-xl sm:text-2xl font-bold text-white pt-4 pb-2 border-b border-slate-800">
                  5. Olor a quemado después de conducir en calor extremo
                </h2>
                <p>
                  Un olor acre y picante proveniente de las ruedas indica un recalentamiento severo del material de fricción. Esto sucede a menudo cuando el freno de mano se quedó parcialmente enganchado o cuando un caliper no libera la presión tras soltar el pedal.
                </p>
              </div>

              {/* High-Converting In-Article WhatsApp CTA Banner */}
              <div className="my-10 bg-gradient-to-br from-[#0A1C36] via-[#0E2850] to-[#081528] border-2 border-[#1769E0] rounded-3xl p-6 sm:p-8 text-center relative overflow-hidden shadow-2xl shadow-[#1769E0]/20">
                <div className="absolute top-0 right-0 w-64 h-64 bg-radial from-[#1769E0]/20 to-transparent pointer-events-none" />
                <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2 relative">
                  ¿Tu auto presenta alguno de estos síntomas?
                </h3>
                <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-6 relative">
                  No te arriesgues en el tráfico de Sonora. Trae tu auto a Genera Automotriz para una inspección visual de frenos y diagnóstico computarizado sin sorpresas.
                </p>
                <a
                  href="https://wa.me/526624330056?text=Hola%20Genera%20Automotriz,%20leí%20su%20guía%20de%20frenos%20y%20quiero%20agendar%20una%20revisión"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base rounded-full shadow-lg shadow-emerald-600/40 hover:scale-105 active:scale-95 transition-all relative z-10"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Agendar Cita por WhatsApp (662 433 0056)</span>
                </a>
                <div className="mt-3 text-xs text-slate-400 relative">
                  Hermosillo, Sonora · Diagnóstico claro y presupuesto autorizado por ti antes de cualquier trabajo.
                </div>
              </div>

              {/* Author Box */}
              <div className="flex flex-col sm:flex-row items-center gap-5 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 my-8">
                <img
                  src="/images/mecanico02.jpg"
                  alt="Ingeniero en Jefe Genera Automotriz"
                  className="w-20 h-20 rounded-full object-cover border-2 border-[#1769E0] shadow-lg shadow-[#1769E0]/30 shrink-0"
                />
                <div>
                  <h4 className="text-base font-bold text-white mb-1">
                    Equipo de Especialistas de Genera Automotriz
                  </h4>
                  <div className="text-xs font-semibold text-[#38BDF8] mb-2">
                    Certificados en Diagnóstico Electrónico, Frenos ABS y Suspensión Automotriz
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    En Genera Automotriz nos apasiona cuidar tu seguridad y la de tu familia. Respaldados por marcas líderes como PEISA y tecnología de escaneo Launch X431 Pro, brindamos servicio automotriz de alta gama en Hermosillo con total transparencia.
                  </p>
                </div>
              </div>

              {/* CAJA DE COMUNIDAD Y REDES SOCIALES (FACEBOOK & INSTAGRAM) */}
              <div className="bg-gradient-to-br from-slate-900 via-[#0C1A2E] to-slate-900 border border-[#1769E0]/35 rounded-3xl p-6 sm:p-8 my-8 text-center flex flex-col items-center gap-4 shadow-xl">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#1769E0]/20 text-[#60A5FA] border border-[#1769E0]/30">
                  <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
                  Comunidad Genera Automotriz
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white max-w-lg">
                  ¿Te sirvió esta guía? Síguenos en Redes Sociales
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                  Publicamos tips mecánicos semanales para sobrevivir al calor extremo de Sonora, consejos de mantenimiento preventivo y promociones exclusivas en Hermosillo.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <a
                    href="https://www.facebook.com/GeneraAutomotriz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#1877F2] hover:bg-blue-600 transition-all shadow-md shadow-blue-600/30"
                  >
                    <Facebook className="w-4 h-4" />
                    <span>Seguir en Facebook</span>
                  </a>
                  <a
                    href="https://www.instagram.com/generaautomotriz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] hover:brightness-110 transition-all shadow-md shadow-pink-600/30"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>Seguir en Instagram</span>
                  </a>
                  <a
                    href="https://wa.me/526624330056?text=Hola%20Genera%20Automotriz,%20le%C3%AD%20su%20gu%C3%ADa%20de%20frenos%20y%20quiero%20agendar%20diagn%C3%B3stico"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-all shadow-md shadow-emerald-600/30"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Taller</span>
                  </a>
                </div>
              </div>

              {/* Related Posts Grid */}
              <div className="pt-8 border-t border-slate-800">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-lg font-bold text-white">Artículos Relacionados</h3>
                  <span className="text-xs font-semibold text-[#60A5FA]">Guías Recomendadas</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Card 1 */}
                  <div className="bg-slate-900/60 border border-slate-800 rounded-xl overflow-hidden hover:border-[#1769E0] transition-all group flex flex-col">
                    <img
                      src="/images/genera-diagnostico.jpg"
                      alt="Diagnóstico Computarizado"
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-3.5 flex flex-col flex-1">
                      <span className="text-[10px] font-bold text-[#60A5FA] uppercase mb-1">Diagnóstico</span>
                      <h5 className="text-xs sm:text-sm font-bold text-white line-clamp-2 mb-2 flex-1">
                        ¿Qué significa la luz Check Engine y cuándo es peligroso ignorarla?
                      </h5>
                      <span className="text-[11px] text-[#38BDF8] font-semibold flex items-center gap-1">
                        Leer guía <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-slate-900/60 border border-slate-800 rounded-xl overflow-hidden hover:border-[#1769E0] transition-all group flex flex-col">
                    <img
                      src="/images/genera-suspension.jpg"
                      alt="Suspensión en Hermosillo"
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-3.5 flex flex-col flex-1">
                      <span className="text-[10px] font-bold text-[#60A5FA] uppercase mb-1">Suspensión</span>
                      <h5 className="text-xs sm:text-sm font-bold text-white line-clamp-2 mb-2 flex-1">
                        Cómo proteger los amortiguadores de tu auto en las calles de Sonora
                      </h5>
                      <span className="text-[11px] text-[#38BDF8] font-semibold flex items-center gap-1">
                        Leer guía <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-slate-900/60 border border-slate-800 rounded-xl overflow-hidden hover:border-[#1769E0] transition-all group flex flex-col">
                    <img
                      src="/images/genera-electrico.jpg"
                      alt="Sistema Eléctrico y Batería"
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-3.5 flex flex-col flex-1">
                      <span className="text-[10px] font-bold text-[#60A5FA] uppercase mb-1">Sistema Eléctrico</span>
                      <h5 className="text-xs sm:text-sm font-bold text-white line-clamp-2 mb-2 flex-1">
                        Batería descargada por el calor: síntomas y cuidados indispensables
                      </h5>
                      <span className="text-[11px] text-[#38BDF8] font-semibold flex items-center gap-1">
                        Leer guía <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Modal de Compartir en Instagram en Preview */}
            {showIgModalInPreview && (
              <div 
                className="fixed inset-0 bg-[#040914]/85 backdrop-blur-md z-50 flex items-center justify-center p-4"
                onClick={() => setShowIgModalInPreview(false)}
              >
                <div 
                  className="bg-[#0B1727] border border-[#1769E0]/40 rounded-3xl max-w-lg w-full p-6 shadow-2xl relative"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                    <div className="flex items-center gap-2.5 font-bold text-white">
                      <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center shadow-md">
                        <Instagram className="w-4 h-4 text-white" />
                      </span>
                      <span>Compartir en Instagram & Historias</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setShowIgModalInPreview(false)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                    >
                      ✕
                    </button>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 mb-3 leading-relaxed">
                    Instagram no permite publicar directamente desde la web. Usa este texto preparado con ganchos, viñetas y hashtags de Sonora para tu perfil o historia con sticker de enlace:
                  </p>

                  <div className="bg-[#050B14] border border-slate-800 rounded-xl p-3.5 text-xs text-slate-300 max-h-48 overflow-y-auto whitespace-pre-wrap font-mono mb-4">
                    {igCaptionText}
                  </div>

                  <div className="flex flex-col gap-2">
                    <button
                      type="button"
                      onClick={handleCopyIgCaption}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] hover:brightness-110 shadow-lg shadow-pink-600/30 transition-all cursor-pointer"
                    >
                      {copiedIgCaption ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      <span>{copiedIgCaption ? '¡Texto Copiado!' : 'Copiar Texto para Instagram'}</span>
                    </button>
                    <a
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 transition-all"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Abrir Instagram</span>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* =========================================================
            TAB 2: REDES SOCIALES (FACEBOOK & INSTAGRAM)
            ========================================================= */}
        {activeTab === 'social' && (
          <div className="space-y-8">
            {/* Social Header Banner */}
            <div className="bg-gradient-to-r from-[#0C1F3D] via-[#1A1435] to-[#1F0E27] border border-purple-500/30 rounded-3xl p-5 sm:p-7 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-pink-500/10 via-purple-500/10 to-transparent pointer-events-none rounded-full blur-2xl" />
              
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-blue-500/20 to-pink-500/20 text-pink-300 border border-pink-500/30 mb-3">
                    <Share2 className="w-3.5 h-3.5 text-pink-400" />
                    Optimización Multiplataforma · Meta (FB & IG)
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-2">
                    Previsualización y Herramientas para Facebook & Instagram
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                    Esta plantilla está construida para cumplir con las especificaciones OpenGraph de Meta (relación 1.91:1, 1200x630px). Incluye copys preparados, hashtags locales y simulador de historias con sticker de enlace.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={handleShareFacebookDirect}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#1877F2] hover:bg-blue-600 shadow-lg shadow-blue-600/30 transition-all cursor-pointer"
                  >
                    <Facebook className="w-4 h-4" />
                    <span>Probar en Facebook</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleCopyIgCaption}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] hover:brightness-110 shadow-lg shadow-pink-600/30 transition-all cursor-pointer"
                  >
                    {copiedIgCaption ? <Check className="w-4 h-4" /> : <Instagram className="w-4 h-4" />}
                    <span>{copiedIgCaption ? '¡Copy Copiado!' : 'Copiar Copy Instagram'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Simulator View Switcher */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-slate-900/80 border border-slate-800 p-2 sm:p-2.5 rounded-2xl">
              <div className="flex items-center gap-2 px-2">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Eye className="w-4 h-4 text-[#38BDF8]" />
                  Simulador en Vivo:
                </span>
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setSocialSimulatorView('facebook')}
                  className={`flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    socialSimulatorView === 'facebook'
                      ? 'bg-[#1877F2] text-white shadow-md shadow-blue-600/40'
                      : 'bg-slate-800/80 text-slate-400 hover:text-white'
                  }`}
                >
                  <Facebook className="w-3.5 h-3.5" />
                  <span>Card Feed Facebook (1200×630)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSocialSimulatorView('instagram')}
                  className={`flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    socialSimulatorView === 'instagram'
                      ? 'bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-md shadow-pink-600/40'
                      : 'bg-slate-800/80 text-slate-400 hover:text-white'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Historia Instagram (9:16 con Link)</span>
                </button>
              </div>
            </div>

            {/* =====================================================
                SIMULATOR 1: FACEBOOK FEED POST CARD
                ===================================================== */}
            {socialSimulatorView === 'facebook' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Facebook Post Box */}
                <div className="lg:col-span-8 bg-[#18191A] border border-[#3A3B3C] rounded-2xl overflow-hidden shadow-2xl font-sans text-slate-100">
                  {/* FB Header */}
                  <div className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <img
                          src="/images/genera-mecanico.jpg"
                          alt="Genera Automotriz Hermosillo"
                          className="w-11 h-11 rounded-full object-cover border-2 border-[#1877F2]"
                        />
                        <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-[#18191A] rounded-full" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5 font-bold text-sm text-white">
                          <span>Genera Automotriz Hermosillo</span>
                          <span className="w-4 h-4 bg-[#1877F2] text-white rounded-full flex items-center justify-center text-[10px] font-black">
                            ✓
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-[#B0B3B8]">
                          <span>Hace 12 min</span>
                          <span>·</span>
                          <Globe className="w-3 h-3" />
                        </div>
                      </div>
                    </div>
                    <button type="button" className="text-[#B0B3B8] hover:text-white p-2 rounded-full hover:bg-[#3A3B3C] transition-colors">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </div>

                  {/* FB Text Body */}
                  <div className="px-4 pb-3 text-sm text-[#E4E6EB] leading-relaxed space-y-2">
                    <p>
                      🚨 <strong className="text-white">¡ALERTA PARA CONDUCTORES EN HERMOSILLO!</strong> 🚨
                    </p>
                    <p>
                      Con temperaturas de asfalto superando los 45°C en Sonora, el calor acelera el desgaste de los frenos y degrada el líquido hidráulico antes de tiempo.
                    </p>
                    <p>
                      Compartimos esta nueva guía gratuita elaborada por nuestro equipo técnico con las <strong className="text-white">5 señales críticas</strong> para saber si tus balatas o discos necesitan cambio urgente antes de sufrir una avería grave en carretera o bulevares principales.
                    </p>
                  </div>

                  {/* FB Open Graph Link Preview Card */}
                  <a
                    href="/blog/senales-cambio-frenos-hermosillo"
                    onClick={(e) => { e.preventDefault(); setActiveTab('preview'); }}
                    className="block border-y border-[#3A3B3C] bg-[#242526] hover:bg-[#2A2B2D] transition-colors group cursor-pointer"
                  >
                    <div className="relative w-full aspect-[1.91/1] overflow-hidden bg-slate-900">
                      <img
                        src="/images/balatas.jpg"
                        alt="Revisión de frenos en Genera Automotriz Hermosillo"
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-bold text-[#60A5FA] border border-blue-400/30">
                        1200 × 630 px · Open Graph
                      </div>
                    </div>
                    <div className="p-3.5 bg-[#242526]">
                      <div className="text-[11px] uppercase tracking-wider text-[#B0B3B8] font-semibold mb-1">
                        GENERAAUTOMOTRIZ.COM
                      </div>
                      <div className="text-base font-bold text-[#E4E6EB] group-hover:underline line-clamp-2 mb-1 leading-snug">
                        5 Señales de que los Frenos de tu Auto Necesitan Cambio Inmediato en Hermosillo
                      </div>
                      <div className="text-xs text-[#B0B3B8] line-clamp-2">
                        ¿Chirrido al frenar o pedal esponjoso? Conoce las alertas críticas del calor extremo en Sonora. Diagnóstico garantizado en Genera Automotriz.
                      </div>
                    </div>
                  </a>

                  {/* FB Engagement Bar */}
                  <div className="px-4 py-2.5 flex items-center justify-between text-xs text-[#B0B3B8] border-b border-[#3A3B3C]">
                    <div className="flex items-center gap-1.5">
                      <div className="flex -space-x-1">
                        <span className="w-4 h-4 rounded-full bg-[#1877F2] flex items-center justify-center text-[10px] text-white">👍</span>
                        <span className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center text-[10px] text-white">❤️</span>
                      </div>
                      <span className="hover:underline cursor-pointer">84 personas</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="hover:underline cursor-pointer">22 comentarios</span>
                      <span className="hover:underline cursor-pointer">38 veces compartido</span>
                    </div>
                  </div>

                  {/* FB Action Buttons */}
                  <div className="px-2 py-1 flex items-center justify-around text-xs sm:text-sm font-semibold text-[#B0B3B8]">
                    <button type="button" className="flex-1 py-2 rounded-lg hover:bg-[#3A3B3C] flex items-center justify-center gap-2 hover:text-white transition-colors cursor-pointer">
                      <ThumbsUp className="w-4 h-4" />
                      <span>Me gusta</span>
                    </button>
                    <button type="button" className="flex-1 py-2 rounded-lg hover:bg-[#3A3B3C] flex items-center justify-center gap-2 hover:text-white transition-colors cursor-pointer">
                      <MessageSquare className="w-4 h-4" />
                      <span>Comentar</span>
                    </button>
                    <button 
                      type="button" 
                      onClick={handleShareFacebookDirect}
                      className="flex-1 py-2 rounded-lg hover:bg-[#3A3B3C] flex items-center justify-center gap-2 text-[#60A5FA] hover:text-[#93C5FD] transition-colors cursor-pointer"
                    >
                      <Share2 className="w-4 h-4" />
                      <span>Compartir ahora</span>
                    </button>
                  </div>
                </div>

                {/* Facebook Optimization Info Column */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-xl">
                    <div className="flex items-center gap-2 text-sm font-bold text-white mb-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Por qué funciona en Facebook:</span>
                    </div>
                    <ul className="space-y-2.5 text-xs text-slate-300 leading-relaxed">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 font-bold">•</span>
                        <span><strong>Formato 1.91:1 grande:</strong> Facebook ya no muestra miniaturas pequeñas si la imagen tiene al menos 1200x630 píxeles.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 font-bold">•</span>
                        <span><strong>Geolocalizado a Hermosillo:</strong> Al mencionar la ciudad y el calor de Sonora, los algoritmos locales de Facebook le dan hasta un 4x más de alcance orgánico.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 font-bold">•</span>
                        <span><strong>Ideal para grupos de compra/venta y autos:</strong> Perfecto para compartir en grupos como "Autos Hermosillo" o "Mecánicos Sonora".</span>
                      </li>
                    </ul>

                    <div className="mt-5 pt-4 border-t border-slate-800">
                      <button
                        type="button"
                        onClick={handleCopyFbCaption}
                        className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-[#1877F2] hover:bg-blue-600 transition-all cursor-pointer shadow-md shadow-blue-600/30"
                      >
                        {copiedFbCaption ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        <span>{copiedFbCaption ? '¡Texto para Facebook Copiado!' : 'Copiar Texto para Facebook'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* =====================================================
                SIMULATOR 2: INSTAGRAM STORY WITH LINK STICKER
                ===================================================== */}
            {socialSimulatorView === 'instagram' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Phone Simulator Frame */}
                <div className="lg:col-span-6 flex justify-center">
                  <div className="w-[320px] sm:w-[360px] h-[640px] rounded-[42px] border-[6px] border-slate-700 bg-black p-3 relative shadow-2xl flex flex-col justify-between overflow-hidden">
                    {/* Phone Notch/Speaker */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-4 bg-slate-900 rounded-full z-30" />

                    {/* Story Content Canvas */}
                    <div className="relative w-full h-full rounded-[30px] overflow-hidden flex flex-col justify-between p-4 bg-slate-900">
                      {/* Story Background Visual */}
                      <img
                        src="/images/balatas.jpg"
                        alt="Historia de Instagram Frenos Hermosillo"
                        className="absolute inset-0 w-full h-full object-cover brightness-60"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/90 pointer-events-none" />

                      {/* Story Header (Progress Bar & Profile) */}
                      <div className="relative z-20 space-y-3 pt-4">
                        {/* 3 Progress Bars */}
                        <div className="flex items-center gap-1">
                          <div className="h-0.5 flex-1 bg-white rounded-full" />
                          <div className="h-0.5 flex-1 bg-white/40 rounded-full" />
                          <div className="h-0.5 flex-1 bg-white/40 rounded-full" />
                        </div>

                        {/* Profile Info */}
                        <div className="flex items-center justify-between text-white">
                          <div className="flex items-center gap-2">
                            <img
                              src="/images/genera-mecanico.jpg"
                              alt="generaautomotriz"
                              className="w-8 h-8 rounded-full border border-pink-500 object-cover"
                            />
                            <div className="text-xs font-bold flex items-center gap-1">
                              <span>generaautomotriz</span>
                              <span className="text-[11px] text-slate-300 font-normal">18 min</span>
                            </div>
                          </div>
                          <span className="text-white/80 font-bold text-sm">✕</span>
                        </div>
                      </div>

                      {/* Story Center Message with Hook */}
                      <div className="relative z-20 my-auto text-center space-y-4 px-2">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-red-600 text-white shadow-lg animate-pulse">
                          🚨 ¿Frenos chillando en Hermosillo?
                        </div>

                        <h3 className="text-xl sm:text-2xl font-black text-white leading-tight drop-shadow-md">
                          5 SEÑALES DE QUE TUS BALATAS PIDEN CAMBIO
                        </h3>

                        <p className="text-xs text-slate-200 drop-shadow leading-relaxed">
                          El calor de Sonora desgasta los frenos el doble de rápido. ¡No te quedes sin pedal en Periférico o Solidaridad!
                        </p>

                        {/* THE OFFICIAL INSTAGRAM LINK STICKER SIMULATOR */}
                        <div className="pt-2">
                          <a
                            href="/blog/senales-cambio-frenos-hermosillo"
                            onClick={(e) => { e.preventDefault(); setActiveTab('preview'); }}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/95 hover:bg-white text-slate-900 font-extrabold text-xs tracking-wide shadow-[0_0_20px_rgba(255,255,255,0.7)] hover:scale-105 active:scale-95 transition-all group"
                          >
                            <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-black">
                              🔗
                            </span>
                            <span className="group-hover:text-[#1769E0] transition-colors">
                              generaautomotriz.com
                            </span>
                          </a>
                          <div className="text-[10px] text-white/80 mt-1.5 font-medium drop-shadow">
                            👆 Toca el sticker para leer el blog completo
                          </div>
                        </div>
                      </div>

                      {/* Story Bottom Interaction */}
                      <div className="relative z-20 flex items-center gap-2 pt-2">
                        <div className="flex-1 py-2 px-3 rounded-full border border-white/40 text-[11px] text-white/70 bg-black/40 backdrop-blur-md">
                          Enviar mensaje...
                        </div>
                        <button type="button" className="p-2 text-white hover:text-pink-500 transition-colors">
                          <Heart className="w-5 h-5" />
                        </button>
                        <button type="button" className="p-2 text-white hover:text-blue-400 transition-colors">
                          <Send className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Instagram Story Guide & Copy Generator Column */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] text-white">
                      <Instagram className="w-3.5 h-3.5" />
                      Estrategia Instagram Stories + Bio Link
                    </div>

                    <h3 className="text-lg font-bold text-white">
                      Cómo aprovechar las historias para llevar clientes a tu taller
                    </h3>

                    <ol className="space-y-3 text-xs sm:text-sm text-slate-300">
                      <li className="flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-pink-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">1</span>
                        <span><strong>Crea tu historia:</strong> Toma una foto en el taller o usa la imagen destacada del post (<code className="text-[#60A5FA]">/images/balatas.jpg</code>).</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-pink-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">2</span>
                        <span><strong>Agrega el Sticker de Enlace:</strong> En Instagram, toca el icono superior de stickers, selecciona <strong>"ENLACE"</strong> y pega la URL de la entrada de tu blog.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-pink-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">3</span>
                        <span><strong>Personaliza el texto del sticker:</strong> Escribe <em>"Leer Guía de Frenos"</em> o <em>"generaautomotriz.com"</em> para generar confianza.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-pink-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">4</span>
                        <span><strong>Guarda en Historias Destacadas:</strong> Pon estas historias en una carpeta destacada llamada <strong>"Tips Taller"</strong> en tu perfil para tráfico permanente.</span>
                      </li>
                    </ol>

                    <div className="pt-4 border-t border-slate-800">
                      <button
                        type="button"
                        onClick={handleCopyIgCaption}
                        className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] hover:brightness-110 shadow-lg shadow-pink-600/30 transition-all cursor-pointer"
                      >
                        {copiedIgCaption ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        <span>{copiedIgCaption ? '¡Copy con Hashtags Copiado!' : 'Copiar Texto para Feed / Historia'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* =====================================================
                SECTION: READY-TO-USE SOCIAL CAPTION GENERATOR
                ===================================================== */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Instagram Copy Card */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between shadow-xl">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-pink-500/10 text-pink-400 border border-pink-500/30">
                      <Instagram className="w-3.5 h-3.5" />
                      Copy Optimizado para Instagram
                    </span>
                    <span className="text-[11px] text-slate-400 font-semibold">Feed / Carrusel / Reels</span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    Texto listo con formato, viñetas y hashtags de Sonora
                  </h3>
                  <p className="text-xs text-slate-400 mb-4">
                    Diseñado para enganchar en las primeras dos líneas antes del "Ver más" de Instagram.
                  </p>

                  <div className="bg-[#050B14] border border-slate-800/90 rounded-2xl p-4 text-xs font-mono text-slate-300 max-h-56 overflow-y-auto whitespace-pre-wrap leading-relaxed">
                    {igCaptionText}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800">
                  <button
                    type="button"
                    onClick={handleCopyIgCaption}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] hover:brightness-110 shadow-md shadow-pink-600/30 transition-all cursor-pointer"
                  >
                    {copiedIgCaption ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedIgCaption ? '¡Copy de Instagram Copiado!' : 'Copiar Copy para Instagram'}</span>
                  </button>
                </div>
              </div>

              {/* Facebook Copy Card */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between shadow-xl">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/30">
                      <Facebook className="w-3.5 h-3.5" />
                      Copy Optimizado para Facebook
                    </span>
                    <span className="text-[11px] text-slate-400 font-semibold">Fanpage & Grupos</span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    Publicación para muro y grupos de Hermosillo
                  </h3>
                  <p className="text-xs text-slate-400 mb-4">
                    Estilo informativo y de alerta comunitaria para maximizar comentarios y veces compartido.
                  </p>

                  <div className="bg-[#050B14] border border-slate-800/90 rounded-2xl p-4 text-xs font-mono text-slate-300 max-h-56 overflow-y-auto whitespace-pre-wrap leading-relaxed">
                    {fbPostText}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800 flex gap-2">
                  <button
                    type="button"
                    onClick={handleCopyFbCaption}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#1877F2] hover:bg-blue-600 shadow-md shadow-blue-600/30 transition-all cursor-pointer"
                  >
                    {copiedFbCaption ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedFbCaption ? '¡Copiado para Facebook!' : 'Copiar Texto Facebook'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleShareFacebookDirect}
                    className="px-3.5 py-2.5 rounded-xl text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all cursor-pointer"
                    title="Abrir ventana de compartir en Facebook"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* =====================================================
                SECTION: OPEN GRAPH CODE BLOCK FOR WORDPRESS <HEAD>
                ===================================================== */}
            <div className="bg-slate-900/90 border border-[#1769E0]/40 rounded-3xl p-6 sm:p-7 shadow-2xl">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#1769E0]/20 text-[#60A5FA] border border-[#1769E0]/30 mb-2">
                    <Code2 className="w-3.5 h-3.5" />
                    Etiquetas Open Graph (SEO Social)
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    Metaetiquetas Open Graph para WordPress / Elementor
                  </h3>
                  <p className="text-xs text-slate-400">
                    Inserta estas etiquetas en el <code className="text-blue-300">&lt;head&gt;</code> de WordPress para que Facebook e Instagram lean la imagen de 1200x630px automáticamente.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleCopyOgMeta}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#1769E0] hover:bg-blue-600 shadow-lg shadow-[#1769E0]/30 transition-all shrink-0 cursor-pointer"
                >
                  {copiedOgMeta ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedOgMeta ? '¡Metaetiquetas Copiadas!' : 'Copiar Etiquetas Open Graph'}</span>
                </button>
              </div>

              <div className="relative rounded-2xl border border-slate-800 bg-[#040914] overflow-hidden mb-5">
                <div className="px-4 py-2 bg-slate-950 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>open-graph-meta-tags.html</span>
                  <span>Meta / OpenGraph Standard</span>
                </div>
                <pre className="p-4 overflow-x-auto text-xs font-mono text-[#93C5FD] leading-relaxed max-h-56">
                  <code>{ogMetaTagsSnippet}</code>
                </pre>
              </div>

              {/* Instructions on where to paste */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300">
                <div className="bg-slate-950/60 border border-slate-800 p-3.5 rounded-xl">
                  <div className="font-bold text-white mb-1">Opción 1: Yoast SEO</div>
                  <p className="text-slate-400">
                    Edita la entrada en WordPress &gt; Panel Yoast al final &gt; Pestaña <strong>"Social"</strong> &gt; Facebook & Twitter.
                  </p>
                </div>
                <div className="bg-slate-950/60 border border-slate-800 p-3.5 rounded-xl">
                  <div className="font-bold text-white mb-1">Opción 2: Rank Math SEO</div>
                  <p className="text-slate-400">
                    En el editor de la entrada &gt; Icono Rank Math &gt; Pestaña <strong>"Social"</strong> &gt; Agrega la imagen de 1200x630px.
                  </p>
                </div>
                <div className="bg-slate-950/60 border border-slate-800 p-3.5 rounded-xl">
                  <div className="font-bold text-white mb-1">Opción 3: WPCode / Elementor</div>
                  <p className="text-slate-400">
                    Elementor &gt; Código Personalizado &gt; Agregar nuevo &gt; Ubicación: <code className="text-blue-300">&lt;head&gt;</code>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================
            TAB 3: RAW CODE VIEWER & COPY
            ========================================================= */}
        {activeTab === 'code' && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-slate-900 p-4 rounded-2xl border border-slate-800">
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-[#38BDF8]" />
                  Código HTML Autocontenido y Scoped para Elementor
                </h3>
                <p className="text-xs text-slate-400">
                  Pégalo directamente en un widget HTML de Elementor en cualquier tema de WordPress.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopyCode}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    copied
                      ? 'bg-emerald-600 text-white'
                      : 'bg-[#1769E0] text-white hover:bg-blue-600'
                  }`}
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? '¡Código Copiado!' : 'Copiar Todo el Código'}</span>
                </button>
                <button
                  type="button"
                  onClick={handleDownloadHtml}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>.html</span>
                </button>
              </div>
            </div>

            <div className="relative rounded-2xl border border-slate-800 bg-[#040914] overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 text-xs text-slate-400 font-mono">
                <span>/public/elementor-single-post.html</span>
                <span>{htmlCode.length > 0 ? `${(htmlCode.length / 1024).toFixed(1)} KB` : 'Cargando...'}</span>
              </div>
              <pre className="p-4 overflow-x-auto text-xs font-mono text-slate-300 max-h-[600px] leading-relaxed">
                <code>{htmlCode}</code>
              </pre>
            </div>
          </div>
        )}

        {/* =========================================================
            TAB 4: STEP-BY-STEP WORDPRESS & ELEMENTOR IMPORT GUIDE
            ========================================================= */}
        {activeTab === 'guide' && (
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-6">
              <h2 className="text-2xl font-extrabold text-white mb-2">
                Guía de Importación y Solución de Errores en Elementor
              </h2>
              <p className="text-sm text-slate-300">
                Hemos corregido y adaptado la plantilla JSON al estándar universal de Elementor (Página y Sección). Elige el método que mejor se adapte a tu instalación.
              </p>
            </div>

            {/* Error Diagnostics & Solution Callout */}
            <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/40 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0 mt-0.5 text-amber-400">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div className="space-y-3 flex-1 text-xs sm:text-sm">
                  <div>
                    <h3 className="text-base font-bold text-white flex items-center gap-2">
                      ¿Por qué Elementor marcaba error al importar el JSON y cómo se resolvió?
                    </h3>
                    <p className="text-slate-300 text-xs mt-1 leading-relaxed">
                      Si recibiste el mensaje <em>"Archivo no válido"</em>, <em>"Tipo de plantilla inválido"</em> o <em>"No se permite subir este archivo por motivos de seguridad"</em>, aquí te explicamos la causa técnica y la solución inmediata:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                    <div className="bg-slate-900/90 border border-slate-800 p-3.5 rounded-2xl">
                      <div className="font-bold text-emerald-400 flex items-center gap-1.5 text-xs mb-1">
                        <CheckCircle2 className="w-4 h-4" /> 1. Tipo de Plantilla e IDs Corregidos
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        El importador de Elementor rechaza tipos que no sean <code className="text-blue-300">"page"</code> o <code className="text-blue-300">"section"</code>, y exige IDs con hash hexadecimal de 7 caracteres. <strong>Ya actualizamos el JSON a tipo "page" con IDs normalizados compatibles al 100% con Elementor Free y Pro.</strong>
                      </p>
                    </div>

                    <div className="bg-slate-900/90 border border-slate-800 p-3.5 rounded-2xl">
                      <div className="font-bold text-amber-300 flex items-center gap-1.5 text-xs mb-1">
                        <Lightbulb className="w-4 h-4" /> 2. Permiso de JSON en WordPress
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Si WordPress bloquea la subida por seguridad: en tu panel de WordPress ve a <strong>Elementor &gt; Ajustes &gt; Avanzado</strong> y activa <strong className="text-slate-200">"Habilitar subida de archivos sin filtrar"</strong> (Enable Unfiltered File Uploads). Haz clic en Guardar.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Method 1: Elementor JSON Template */}
              <div className="bg-slate-900/80 border border-[#1769E0]/40 rounded-3xl p-6 flex flex-col justify-between shadow-xl">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#1769E0]/20 text-[#60A5FA] border border-[#1769E0]/30 mb-4">
                    Método 1 (Nativo en Elementor)
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Importar archivo JSON Corregido
                  </h3>
                  <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                    Formato oficial de Elementor (<code className="text-blue-300">version: 0.4, type: page</code>). Se importa directo en tu biblioteca de Elementor.
                  </p>

                  <ol className="space-y-2.5 text-xs text-slate-300 mb-6">
                    <li className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#1769E0] text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">1</span>
                      <span>Descarga la <strong>Plantilla Tipo Página</strong> (o Tipo Sección) abajo.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#1769E0] text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">2</span>
                      <span>En tu WordPress, entra a <strong>Plantillas &gt; Plantillas Guardadas</strong>.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#1769E0] text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">3</span>
                      <span>Haz clic en el botón superior <strong>"Importar Plantillas"</strong> y selecciona el archivo descargado.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#1769E0] text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">4</span>
                      <span>Abre cualquier entrada con Elementor, haz clic en el icono de carpeta y elige <strong>"Insertar Plantilla"</strong>.</span>
                    </li>
                  </ol>
                </div>

                <div className="pt-4 border-t border-slate-800 space-y-2.5">
                  <button
                    type="button"
                    onClick={handleDownloadJson}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#164B9B] to-[#1769E0] hover:brightness-110 shadow-lg shadow-[#1769E0]/30 transition-all cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>Descargar JSON Tipo Página (Recomendado)</span>
                  </button>
                  
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={handleDownloadSectionJson}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all cursor-pointer"
                      title="Descargar como plantilla de tipo sección"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Descargar Tipo Sección</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleCopyJson}
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all cursor-pointer"
                      title="Copiar contenido JSON al portapapeles"
                    >
                      {copiedJson ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedJson ? '¡Copiado!' : 'Copiar JSON'}</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Method 2: HTML Widget in Elementor */}
              <div className="bg-slate-900/80 border border-emerald-500/30 rounded-3xl p-6 flex flex-col justify-between shadow-xl">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 mb-4">
                    Método 2 (100% Libre de Errores)
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Pegar en Widget HTML de Elementor
                  </h3>
                  <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                    Si tu hosting restringe subidas de archivos JSON, este método es <strong>infalible</strong> y no requiere permisos de servidor ni plugins adicionales.
                  </p>

                  <ol className="space-y-2.5 text-xs text-slate-300 mb-6">
                    <li className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-emerald-600 text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">1</span>
                      <span>Haz clic en el botón verde <strong>"Copiar Código HTML"</strong>.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-emerald-600 text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">2</span>
                      <span>Abre tu entrada en Elementor y arrastra un widget <strong>"HTML"</strong> al lienzo.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-emerald-600 text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">3</span>
                      <span>Pega el código copiado en el panel izquierdo del widget HTML.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-emerald-600 text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">4</span>
                      <span>¡Listo! Se visualiza idéntico, 100% responsivo y sin interferir con tu tema de WordPress.</span>
                    </li>
                  </ol>
                </div>

                <div className="pt-4 border-t border-slate-800 flex gap-2">
                  <button
                    type="button"
                    onClick={handleCopyCode}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/30 transition-all cursor-pointer"
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? '¡Código HTML Copiado!' : 'Copiar Código HTML Widget'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleDownloadHtml}
                    className="p-3 rounded-xl text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all cursor-pointer"
                    title="Descargar archivo HTML"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Customization Details Callout */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 text-xs text-slate-400 space-y-2">
              <div className="font-bold text-slate-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Compatibilidad con Elementor Pro y Etiquetas Dinámicas:
              </div>
              <p>
                Si tienes Elementor Pro, puedes reemplazar los textos de ejemplo con etiquetas dinámicas nativas:
                <code className="text-[#60A5FA] mx-1">Post Title</code>,
                <code className="text-[#60A5FA] mx-1">Featured Image</code>,
                <code className="text-[#60A5FA] mx-1">Post Content</code> y
                <code className="text-[#60A5FA] mx-1">Author Box</code>.
                Todos los colores corresponden a la identidad visual de Genera Automotriz (Azul Real <code className="text-blue-300">#1769E0</code>, Fondo Oscuro <code className="text-blue-300">#07111F</code>, Verde WhatsApp <code className="text-emerald-400">#059669</code>).
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

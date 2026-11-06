import React, { useState, useEffect } from 'react';
import { Copy, Check, Download, AlertCircle, FileArchive, Globe, ExternalLink, CheckCircle } from 'lucide-react';

export const CodeExportModal: React.FC = () => {
  const [activeCodeTab, setActiveCodeTab] = useState<'html' | 'css'>('html');
  const [copied, setCopied] = useState(false);
  const [htmlCode, setHtmlCode] = useState<string>('Loading complete portfolio code...');
  const [cssCode, setCssCode] = useState<string>('Loading stylesheet...');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch('/export/portfolio.html').then(r => r.text()),
      fetch('/export/style.css').then(r => r.text()),
    ])
      .then(([html, css]) => {
        setHtmlCode(html);
        setCssCode(css);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load export files:', err);
        setLoading(false);
      });
  }, []);

  const handleCopyCode = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadHtml = () => {
    const blob = new Blob([htmlCode], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'index.html';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleDownloadCss = () => {
    const blob = new Blob([cssCode], { type: 'text/css;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'style.css';
    a.click();
    URL.revokeObjectURL(url);
  };

  const currentCode = activeCodeTab === 'html' ? htmlCode : cssCode;

  return (
    <div className="space-y-8 max-w-5xl mx-auto py-6">
      {/* Header */}
      <div className="pb-6 border-b border-neutral-200 dark:border-neutral-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-1">
            <span>GitHub Pages Deployment Fix</span>
            <span aria-hidden="true">·</span>
            <span>All 43 Architectural Sheets</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-['Outfit'] text-neutral-900 dark:text-neutral-50">
            Source Code & GitHub Fix
          </h1>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 max-w-2xl">
            Clean, production-ready, 100% self-contained code for Vaidehi Dhumal's architectural portfolio.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5">
          <a
            href="/assets/vaidehi_dhumal_portfolio_assets.zip"
            download="vaidehi_dhumal_portfolio_assets.zip"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 hover:bg-neutral-800 transition-colors shadow-sm cursor-pointer"
          >
            <FileArchive className="w-3.5 h-3.5" />
            <span>Download Full ZIP (11.3 MB)</span>
          </a>

          <button
            onClick={handleDownloadHtml}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download index.html</span>
          </button>
        </div>
      </div>

      {/* Root Cause & Resolution Banner */}
      <div className="p-5 rounded-2xl border border-amber-200 bg-amber-50/70 dark:bg-amber-950/20 dark:border-amber-800/50">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-2 text-sm text-amber-900 dark:text-amber-200">
            <h3 className="font-semibold text-base">Why the layout appeared broken on GitHub Pages</h3>
            <p className="text-neutral-700 dark:text-neutral-300">
              Your GitHub repository's <code className="px-1.5 py-0.5 rounded bg-amber-100 dark:bg-amber-900/50 font-mono text-xs">style.css</code> file was out of date and lacked the CSS rules for the new sheet gallery (<code className="font-mono text-xs">.sheet-grid</code>, <code className="font-mono text-xs">.sheet-media</code>). Without these rules, the browser rendered each image unconstrained at full 2400px width with default blue links.
            </p>
            <div className="pt-2 border-t border-amber-200 dark:border-amber-800/40 font-medium text-neutral-900 dark:text-neutral-100">
              <span className="font-bold">Permanent 1-Step Fix:</span> The <code className="px-1.5 py-0.5 rounded bg-neutral-200 dark:bg-neutral-800 font-mono text-xs">index.html</code> code below has the <strong>complete CSS embedded directly inside</strong>. You do NOT need a separate <code className="font-mono text-xs">style.css</code> anymore! Simply copy this code or upload <code className="font-mono text-xs">index.html</code> to your GitHub repository root.
            </div>
          </div>
        </div>
      </div>

      {/* GitHub Repository Step-by-Step Guide */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
          <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">
            <span className="w-5 h-5 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-neutral-700 dark:text-neutral-300">1</span>
            <span>Update index.html</span>
          </div>
          <p className="text-xs text-neutral-600 dark:text-neutral-400">
            Click <strong>Copy HTML Code</strong> below, go to your GitHub repository (<code className="text-neutral-900 dark:text-neutral-200">vaidehidhumal04.github.io</code>), open <code className="text-neutral-900 dark:text-neutral-200">index.html</code>, edit, replace all contents, and click <strong>Commit changes</strong>.
          </p>
        </div>

        <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
          <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">
            <span className="w-5 h-5 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-neutral-700 dark:text-neutral-300">2</span>
            <span>Check Assets Folder</span>
          </div>
          <p className="text-xs text-neutral-600 dark:text-neutral-400">
            Ensure your 43 sheet images are located in <code className="text-neutral-900 dark:text-neutral-200 font-mono">assets/portfolio/p01.jpg</code> through <code className="text-neutral-900 dark:text-neutral-200 font-mono">p43.jpg</code>, and <code className="text-neutral-900 dark:text-neutral-200 font-mono">assets/resume/resume_p01.jpg</code>.
          </p>
        </div>

        <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
          <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">
            <span className="w-5 h-5 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-neutral-700 dark:text-neutral-300">3</span>
            <span>Live Preview</span>
          </div>
          <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-2">
            Once committed, GitHub Pages will automatically rebuild and deploy your site within 60 seconds.
          </p>
          <a
            href="https://vaidehidhumal04-hub.github.io/vaidehidhumal04.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-neutral-900 dark:text-neutral-100 font-medium underline"
          >
            <span>Visit Live GitHub Site</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Code Viewer Panel */}
      <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-950 text-neutral-100 overflow-hidden shadow-lg">
        {/* Sub Navigation Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-neutral-800 bg-neutral-900/60">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveCodeTab('html')}
              className={`px-3 py-1.5 text-xs font-mono font-medium rounded-md transition-colors cursor-pointer ${
                activeCodeTab === 'html'
                  ? 'bg-neutral-800 text-white border border-neutral-700'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              index.html (Self-Contained · All 43 Sheets)
            </button>
            <button
              onClick={() => setActiveCodeTab('css')}
              className={`px-3 py-1.5 text-xs font-mono font-medium rounded-md transition-colors cursor-pointer ${
                activeCodeTab === 'css'
                  ? 'bg-neutral-800 text-white border border-neutral-700'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              style.css (External Backup)
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleCopyCode(currentCode)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white border border-neutral-700 transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy {activeCodeTab.toUpperCase()} Code</span>
                </>
              )}
            </button>

            {activeCodeTab === 'html' ? (
              <button
                onClick={handleDownloadHtml}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md bg-white text-neutral-900 hover:bg-neutral-200 transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Save index.html</span>
              </button>
            ) : (
              <button
                onClick={handleDownloadCss}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md bg-white text-neutral-900 hover:bg-neutral-200 transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Save style.css</span>
              </button>
            )}
          </div>
        </div>

        {/* Code Content Box */}
        <div className="p-4 sm:p-6 overflow-x-auto max-h-[600px] text-xs font-mono text-neutral-300 leading-relaxed">
          {loading ? (
            <div className="py-12 text-center text-neutral-400">Loading code assets...</div>
          ) : (
            <pre className="whitespace-pre">
              {currentCode}
            </pre>
          )}
        </div>
      </div>
    </div>
  );
};

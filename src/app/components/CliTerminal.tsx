"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Terminal, X, ChevronRight } from 'lucide-react';
import { useProfile } from '../context/ProfileContext';

const CliTerminal: React.FC = () => {
  const { activeProfileId, activeProfile } = useProfile();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<{ command: string; response: React.ReactNode }[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && !isOpen) {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const command = cmd.trim().toLowerCase();
    let response: React.ReactNode;

    switch (command) {
      case 'help':
        response = (
          <div className="space-y-1">
            <p className="text-accent-blue">Available commands:</p>
            <p><span className="text-accent-green">whoami</span> - Display profile information</p>
            <p><span className="text-accent-green">ls projects/</span> - List all projects</p>
            <p><span className="text-accent-green">skills</span> - Show technical stack</p>
            <p><span className="text-accent-green">contact</span> - Show contact links</p>
            <p><span className="text-accent-green">download</span> - Download current resume</p>
            <p><span className="text-accent-green">clear</span> - Clear terminal history</p>
            <p><span className="text-accent-green">help</span> - Show this help message</p>
          </div>
        );
        break;
      case 'whoami':
        response = (
          <div className="space-y-1">
            <p className="text-accent-green">Swayamvarapu Kumara Swamy</p>
            <p className="text-accent-blue font-bold">[{activeProfileId}] Mode</p>
            <p>{activeProfile.role}</p>
            <p>Based in Visakhapatnam, Andhra Pradesh, India.</p>
          </div>
        );
        break;
      case 'ls projects/':
        response = (
          <div className="grid grid-cols-1 gap-1">
            {activeProfile.projects.map((p, idx) => (
              <p key={idx}>- {p.title.replace(/\s+/g, '_')}</p>
            ))}
          </div>
        );
        break;
      case 'skills':
        response = (
          <p className="text-accent-blue leading-relaxed">
            {activeProfile.stack.join(', ')}
          </p>
        );
        break;
      case 'contact':
        response = (
          <div className="space-y-1">
            <p>Email: <span className="text-accent-green">skumar.dev@gmail.com</span></p>
            <p>GitHub: <span className="text-accent-green">Kumar-s29</span></p>
            <p>LinkedIn: <span className="text-accent-green">swayamvarapu-kumara-swamy</span></p>
          </div>
        );
        break;
      case 'download':
        const link = document.createElement('a');
        link.href = activeProfile.resumeUrl;
        link.download = `${activeProfileId.toLowerCase()}_resume.pdf`;
        link.click();
        response = <p className="text-accent-green">Initiating download for {activeProfileId} resume...</p>;
        break;
      case 'clear':
        setHistory([]);
        return;
      default:
        response = <p className="text-red-400">Command not found: {command}. Type 'help' for available commands.</p>;
    }

    setHistory([...history, { command: cmd, response }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
      setInput('');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-12 bg-bg/60 backdrop-blur-sm">
      <div className="w-full max-w-3xl h-[80vh] md:h-[60vh] bg-surface border border-border shadow-2xl rounded-lg flex flex-col overflow-hidden">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-2 bg-border/40 border-b border-border">
          <div className="flex items-center gap-2 text-text-muted">
            <Terminal size={14} />
            <span className="font-mono text-xs uppercase tracking-widest">system_terminal_v1.0 [{activeProfileId}]</span>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-text-muted hover:text-accent-green transition-colors">
            <X size={18} />
          </button>
        </div>

        {/* Terminal Body */}
        <div 
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-6 font-mono text-sm space-y-4 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent"
        >
          <div className="text-text-muted">
            Welcome to Kumar Swamy's Portfolio CLI. <br />
            Active Environment: <span className="text-accent-green">{activeProfileId}</span> <br />
            Type <span className="text-accent-green">'help'</span> to begin.
          </div>
          
          {history.map((item, idx) => (
            <div key={idx} className="space-y-2">
              <div className="flex items-center gap-2 text-accent-green">
                <ChevronRight size={14} />
                <span>{item.command}</span>
              </div>
              <div className="pl-6 text-text-primary">
                {item.response}
              </div>
            </div>
          ))}
          
          <form onSubmit={handleSubmit} className="flex items-center gap-2 text-accent-green">
            <ChevronRight size={14} />
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-text-primary"
              spellCheck={false}
              autoComplete="off"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CliTerminal;

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown, Download, Mail, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const TYPING_STRINGS = ["AI/ML", "Data Science", "Deep Learning", "DSA"];

export default function HeroSection() {
  const [typingIndex, setTypingIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = TYPING_STRINGS[typingIndex];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(current.slice(0, text.length + 1));
          if (text.length + 1 === current.length) {
            setTimeout(() => setDeleting(true), 1500);
          }
        } else {
          setText(current.slice(0, text.length - 1));
          if (text.length === 0) {
            setDeleting(false);
            setTypingIndex((i) => (i + 1) % TYPING_STRINGS.length);
          }
        }
      },
      deleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, typingIndex]);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center section-padding relative">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Avatar */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.8 }}
          className="mb-8 inline-block"
        >
          <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-neon animate-spin-slow" />
            <div className="absolute inset-1 rounded-full bg-background" />
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
              <img src="/myphoto.jpeg" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
        >
          <span className="gradient-text">Sumi Debnath</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-lg md:text-xl text-muted-foreground mb-2"
        >
          Data Analytics Student | AI/ML &amp; Data Science Enthusiast
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-sm text-muted-foreground mb-6"
        >
          Amity University Online — BCA Data Analytics (2024–2027)
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="h-10 mb-8"
        >
          <span className="text-xl md:text-2xl font-mono font-semibold text-primary">
            {text}
          </span>
          <span className="animate-pulse text-primary">|</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button size="lg" onClick={() => scrollTo("projects")} className="gap-2">
            <FolderOpen size={18} /> View Projects
          </Button>
          <Button size="lg" variant="outline" className="gap-2 glow-border">
            <Download size={18} /> Download Resume
          </Button>
          <Button size="lg" variant="secondary" onClick={() => scrollTo("contact")} className="gap-2">
            <Mail size={18} /> Contact Me
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="mt-16"
        >
          <button
            onClick={() => scrollTo("about")}
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown size={24} className="animate-bounce" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

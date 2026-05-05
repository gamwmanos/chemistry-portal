"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  motion, 
  AnimatePresence, 
  useScroll, 
  useTransform, 
  useAnimation,
  useInView
} from "framer-motion";
import { 
  Mail, Send, CheckCircle, AlertCircle, 
  MessageSquare, HelpCircle, Paperclip, UploadCloud, 
  Sparkles, ChevronDown, User, AtSign, Tag, Info, ArrowRight,
  Globe, Clock, Microscope, Beaker, FileText, X
} from "lucide-react";

import { sendEmailAction } from "../actions/sendEmail";

// --- TYPES ---
type InquiryType = "question" | "comment" | "support" | "business";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  inquiryType: InquiryType;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  subject?: string;
  message?: string;
}

// --- CONSTANTS & MOCK DATA ---
const INQUIRY_TYPES = [
  { id: "question", label: "Ερώτηση", icon: HelpCircle, desc: "Απορίες για την ύλη ή τις ερωτήσεις και ασκήσεις" },
  { id: "comment", label: "Σχόλιο", icon: MessageSquare, desc: "Γενικά σχόλια και εντυπώσεις" },
  { id: "support", label: "Υποστήριξη", icon: Info, desc: "Τεχνική υποστήριξη για την πλατφόρμα" },
  { id: "business", label: "Συνεργασία", icon: Globe, desc: "Προτάσεις για εκπαιδευτικούς" },
];

const FAQS = [
  {
    question: "Πώς μπορώ να αποκτήσω πρόσβαση σε όλες τις λύσεις;",
    answer: "Η πλήρης πρόσβαση στις αναλυτικές λύσεις των ασκήσεων παρέχεται μέσω του Premium λογαριασμού καθηγητή ή μαθητή. Μπορείτε να κάνετε αναβάθμιση μέσα από το προφίλ σας.",
    category: ["support", "question"]
  },
  {
    question: "Μπορώ να χρησιμοποιήσω το υλικό στην τάξη μου;",
    answer: "Ναι, οι εκπαιδευτικοί μπορούν να χρησιμοποιούν το υλικό μας στις παραδόσεις τους, εφόσον αναφέρουν την πηγή. Για εμπορική χρήση, παρακαλούμε επικοινωνήστε μαζί μας.",
    category: ["business", "question"]
  },
  {
    question: "Κάθε πότε ανανεώνεται η ύλη της Χημείας;",
    answer: "Η ομάδα μας επικαιροποιεί το εκπαιδευτικό υλικό κάθε καλοκαίρι, ώστε να είναι απόλυτα εναρμονισμένο με τις τελευταίες οδηγίες του Υπουργείου Παιδείας για τη νέα σχολική χρονιά.",
    category: ["question", "comment"]
  },
  {
    question: "Βρήκα ένα τυπογραφικό λάθος σε μια άσκηση.",
    answer: "Σας ευχαριστούμε πολύ για την προσοχή! Μπορείτε να μας το στείλετε μέσω αυτής της φόρμας επιλέγοντας 'Σχόλιο' ή 'Υποστήριξη', αναφέροντας το κεφάλαιο και τον αριθμό της άσκησης.",
    category: ["comment", "support"]
  }
];

const CONTACT_DETAILS = [
  {
    icon: Mail,
    title: "Email",
    value: "ximeiastintaxi@gmail.com",
    subtitle: "",
    color: "text-brand-blue",
    bgColor: "bg-brand-blue/10",
    delay: 0.1
  }
];

// --- MAIN COMPONENT ---
export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    inquiryType: "question",
    message: ""
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  // For file upload mockup
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Scroll animations
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  // Force scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle Form Inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleInquirySelect = (type: InquiryType) => {
    setFormData(prev => ({ ...prev, inquiryType: type }));
  };

  // Drag & Drop Handlers
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFiles = Array.from(e.dataTransfer.files).slice(0, 3 - files.length); // Max 3 files total
      setFiles(prev => [...prev, ...droppedFiles].slice(0, 3));
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFiles = Array.from(e.target.files).slice(0, 3 - files.length); // Max 3 files total
      setFiles(prev => [...prev, ...selectedFiles].slice(0, 3));
    }
  };

  const removeFile = (indexToRemove: number) => {
    setFiles(prev => prev.filter((_, idx) => idx !== indexToRemove));
  };

  // Validation
  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "Το όνομα είναι υποχρεωτικό";
    if (!formData.lastName.trim()) newErrors.lastName = "Το επώνυμο είναι υποχρεωτικό";
    if (!formData.email.trim()) {
      newErrors.email = "Το email είναι υποχρεωτικό";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Μη έγκυρη μορφή email";
    }
    if (!formData.subject.trim()) newErrors.subject = "Το θέμα είναι υποχρεωτικό";
    if (!formData.message.trim()) newErrors.message = "Το μήνυμα είναι υποχρεωτικό";
    else if (formData.message.length < 10) newErrors.message = "Το μήνυμα πρέπει να είναι τουλάχιστον 10 χαρακτήρες";

    setErrors(newErrors);
    
    // Focus first error gracefully
    if (Object.keys(newErrors).length > 0) {
      const firstErrorField = Object.keys(newErrors)[0];
      const element = document.getElementById(firstErrorField);
      if (element) {
        element.focus();
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return false;
    }
    
    return true;
  };

  // Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    try {
      // Process attachments
      const processedAttachments = await Promise.all(
        files.map(async (file) => {
          return new Promise<{filename: string, content: string}>((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
              const base64 = (reader.result as string).split(',')[1];
              resolve({ filename: file.name, content: base64 });
            };
            reader.onerror = error => reject(error);
          });
        })
      );
      // Call the Server Action
      const result = await sendEmailAction({
        ...formData,
        attachments: processedAttachments.length > 0 ? processedAttachments : undefined
      });
      
      setIsSubmitting(false);

      if (result.success) {
        setIsSuccess(true);
        
        // Reset after success
        setTimeout(() => {
          setIsSuccess(false);
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            subject: "",
            inquiryType: "question",
            message: ""
          });
          setFiles([]);
        }, 6000);
      } else {
        alert(`Παρουσιάστηκε σφάλμα κατά την αποστολή του μηνύματος: ${result.error}`);
        console.error(result.error);
      }
    } catch (error: any) {
      setIsSubmitting(false);
      alert(`Σφάλμα: ${error.message || error}`);
      console.error("Frontend Catch Error:", error);
    }
  };

  // Filter FAQs based on selected inquiry type
  const relevantFaqs = FAQS.filter(faq => faq.category.includes(formData.inquiryType));
  const displayFaqs = relevantFaqs.length > 0 ? relevantFaqs : FAQS.slice(0, 3);

  // Animation Variants
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <div className="min-h-screen bg-background-alt relative overflow-hidden pb-24">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-brand-purple/5 via-brand-blue/5 to-transparent pointer-events-none" />
      
      {/* Animated Orbs */}
      <motion.div 
        className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-brand-blue/10 blur-[100px] pointer-events-none"
        animate={{ 
          scale: [1, 1.2, 0.9, 1],
          opacity: [0.4, 0.7, 0.3, 0.4]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-brand-purple/10 blur-[120px] pointer-events-none"
        animate={{ 
          scale: [1, 1.1, 1.3, 1],
          opacity: [0.3, 0.5, 0.4, 0.3]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 2 }}
      />
      
      {/* Hexagon Pattern Overlay (Subtle) */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" 
           style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-32 lg:pt-40 relative z-10">
        
        {/* HERO SECTION */}
        <motion.div 
          style={{ y: yParallax, opacity: opacityFade }}
          className="text-center max-w-3xl mx-auto mb-20 md:mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass border border-brand-purple/20 text-brand-purple mb-8 font-semibold text-sm shadow-[0_0_20px_rgba(109,40,217,0.15)]"
          >
            <Sparkles className="w-4 h-4" />
            <span>Επικοινωνία & Υποστήριξη</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-main mb-6"
          >
            Πώς μπορούμε να <br className="hidden md:block"/>
            <span className="text-gradient">βοηθήσουμε;</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-text-muted leading-relaxed max-w-2xl mx-auto"
          >
            Είτε έχετε απορίες για κάποια άσκηση χημείας, είτε θέλετε να μοιραστείτε τα σχόλιά σας, η ομάδα μας είναι εδώ για να σας ακούσει.
          </motion.p>
        </motion.div>

        {/* MAIN CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT: FORM COMPONENT */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-8"
          >
            <div className="glass bg-white/60 backdrop-blur-2xl rounded-3xl p-6 md:p-10 shadow-2xl shadow-brand-purple/5 border border-white relative overflow-hidden">
              
              {/* Form Success Overlay */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-white/95 backdrop-blur-sm z-50 flex flex-col items-center justify-center text-center p-8 rounded-3xl"
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                      className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6"
                    >
                      <CheckCircle className="w-12 h-12 text-green-500" />
                    </motion.div>
                    <motion.h3 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-2xl font-bold text-slate-800 mb-2"
                    >
                      Το μήνυμά σας εστάλη!
                    </motion.h3>
                    <motion.p 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-slate-600 max-w-md"
                    >
                      Σας ευχαριστούμε για την επικοινωνία. Η ομάδα μας έλαβε το μήνυμά σας και θα σας απαντήσει το συντομότερο δυνατό στο email που δηλώσατε.
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form Header */}
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-purple to-brand-blue flex items-center justify-center text-white shadow-lg shadow-brand-purple/20">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-800">Στείλτε μας Μήνυμα</h2>
                  <p className="text-slate-500 text-sm">Συμπληρώστε τα στοιχεία σας παρακάτω</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                
                {/* Inquiry Type Selection (Interactive) */}
                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-slate-700">
                    Επιλέξτε Κατηγορία <span className="text-rose-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {INQUIRY_TYPES.map((type) => {
                      const Icon = type.icon;
                      const isSelected = formData.inquiryType === type.id;
                      return (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => handleInquirySelect(type.id as InquiryType)}
                          className={`relative flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all duration-300 ${
                            isSelected 
                              ? "border-brand-purple bg-brand-purple/5 text-brand-purple shadow-sm" 
                              : "border-slate-100 bg-white hover:border-brand-purple/30 hover:bg-slate-50 text-slate-600"
                          }`}
                        >
                          <Icon className={`w-6 h-6 mb-2 ${isSelected ? "text-brand-purple" : "text-slate-400"}`} />
                          <span className="text-xs font-semibold">{type.label}</span>
                          
                          {isSelected && (
                            <motion.div 
                              layoutId="activeIndicator"
                              className="absolute -top-2 -right-2 w-6 h-6 bg-brand-purple text-white rounded-full flex items-center justify-center shadow-md"
                            >
                              <CheckCircle className="w-3 h-3" />
                            </motion.div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Personal Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div className="relative group">
                    <label htmlFor="firstName" className="block text-sm font-semibold text-slate-700 mb-2">
                      Όνομα <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <User className={`w-5 h-5 transition-colors ${focusedField === 'firstName' ? 'text-brand-purple' : 'text-slate-400'}`} />
                      </div>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('firstName')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full pl-11 pr-4 py-3.5 bg-white border-2 rounded-xl outline-none transition-all duration-300 ${
                          errors.firstName 
                            ? 'border-rose-300 focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10' 
                            : 'border-slate-100 focus:border-brand-purple focus:ring-4 focus:ring-brand-purple/10'
                        }`}
                        placeholder="π.χ. Γιώργος"
                      />
                    </div>
                    <AnimatePresence>
                      {errors.firstName && (
                        <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="absolute -bottom-6 left-0 text-xs text-rose-500 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.firstName}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Last Name */}
                  <div className="relative group">
                    <label htmlFor="lastName" className="block text-sm font-semibold text-slate-700 mb-2">
                      Επώνυμο <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <User className={`w-5 h-5 transition-colors ${focusedField === 'lastName' ? 'text-brand-purple' : 'text-slate-400'}`} />
                      </div>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('lastName')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full pl-11 pr-4 py-3.5 bg-white border-2 rounded-xl outline-none transition-all duration-300 ${
                          errors.lastName 
                            ? 'border-rose-300 focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10' 
                            : 'border-slate-100 focus:border-brand-purple focus:ring-4 focus:ring-brand-purple/10'
                        }`}
                        placeholder="π.χ. Παπαδόπουλος"
                      />
                    </div>
                    <AnimatePresence>
                      {errors.lastName && (
                        <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="absolute -bottom-6 left-0 text-xs text-rose-500 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.lastName}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Email & Subject Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="relative group">
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                      Email <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <AtSign className={`w-5 h-5 transition-colors ${focusedField === 'email' ? 'text-brand-purple' : 'text-slate-400'}`} />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full pl-11 pr-4 py-3.5 bg-white border-2 rounded-xl outline-none transition-all duration-300 ${
                          errors.email 
                            ? 'border-rose-300 focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10' 
                            : 'border-slate-100 focus:border-brand-purple focus:ring-4 focus:ring-brand-purple/10'
                        }`}
                        placeholder="email@example.com"
                        dir="ltr"
                      />
                    </div>
                    <AnimatePresence>
                      {errors.email && (
                        <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="absolute -bottom-6 left-0 text-xs text-rose-500 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Subject */}
                  <div className="relative group">
                    <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">
                      Θέμα <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Tag className={`w-5 h-5 transition-colors ${focusedField === 'subject' ? 'text-brand-purple' : 'text-slate-400'}`} />
                      </div>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('subject')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full pl-11 pr-4 py-3.5 bg-white border-2 rounded-xl outline-none transition-all duration-300 ${
                          errors.subject 
                            ? 'border-rose-300 focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10' 
                            : 'border-slate-100 focus:border-brand-purple focus:ring-4 focus:ring-brand-purple/10'
                        }`}
                        placeholder="π.χ. Απορία στο 3ο Κεφάλαιο"
                      />
                    </div>
                    <AnimatePresence>
                      {errors.subject && (
                        <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="absolute -bottom-6 left-0 text-xs text-rose-500 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.subject}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="relative group">
                  <div className="flex justify-between items-end mb-2">
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700">
                      Το μήνυμά σας <span className="text-rose-500">*</span>
                    </label>
                    <span className={`text-xs font-medium ${formData.message.length > 500 ? 'text-amber-500' : 'text-slate-400'}`}>
                      {formData.message.length} χαρακτήρες
                    </span>
                  </div>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      rows={6}
                      className={`w-full p-4 bg-white border-2 rounded-xl outline-none transition-all duration-300 resize-y min-h-[150px] ${
                        errors.message 
                          ? 'border-rose-300 focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10' 
                          : 'border-slate-100 focus:border-brand-purple focus:ring-4 focus:ring-brand-purple/10'
                      }`}
                      placeholder="Γράψτε μας αναλυτικά την απορία, το σχόλιο ή την πρότασή σας..."
                    />
                  </div>
                  <AnimatePresence>
                    {errors.message && (
                      <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="absolute -bottom-6 left-0 text-xs text-rose-500 font-medium flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* File Upload Area (Visual Mockup) */}
                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-slate-700 flex items-center gap-2">
                    <Paperclip className="w-4 h-4" /> Επισύναψη Αρχείων <span className="text-slate-400 font-normal">(Προαιρετικά)</span>
                  </label>
                  
                  <div 
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className={`w-full border-2 border-dashed rounded-xl p-6 flex flex-col items-center justify-center transition-all duration-300 ${
                      isDragging 
                        ? "border-brand-purple bg-brand-purple/5" 
                        : "border-slate-200 bg-slate-50/50 hover:bg-slate-50 hover:border-slate-300"
                    }`}
                  >
                    <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-3">
                      <UploadCloud className={`w-6 h-6 ${isDragging ? "text-brand-purple" : "text-slate-400"}`} />
                    </div>
                    <p className="text-sm text-slate-600 mb-1 text-center font-medium">
                      Σύρετε αρχεία εδώ ή <button type="button" onClick={() => fileInputRef.current?.click()} className="text-brand-blue hover:underline">επιλέξτε αρχεία</button>
                    </p>
                    <input 
                      type="file" 
                      multiple 
                      ref={fileInputRef}
                      onChange={handleFileInput}
                      className="hidden" 
                      accept=".png,.jpg,.jpeg,.pdf"
                    />
                    <p className="text-xs text-slate-400 text-center">
                      PNG, JPG, PDF έως 10MB (Max 3)
                    </p>
                  </div>

                  {/* File List */}
                  {files.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      <AnimatePresence>
                        {files.map((file, index) => (
                          <motion.li 
                            key={`${file.name}-${index}`}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="flex items-center justify-between p-3 bg-white border border-slate-100 rounded-lg shadow-sm"
                          >
                            <div className="flex items-center gap-3 overflow-hidden">
                              <div className="w-8 h-8 rounded bg-brand-purple/10 flex items-center justify-center shrink-0">
                                <FileText className="w-4 h-4 text-brand-purple" />
                              </div>
                              <div className="truncate">
                                <p className="text-sm font-medium text-slate-700 truncate">{file.name}</p>
                                <p className="text-xs text-slate-400">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                              </div>
                            </div>
                            <button 
                              type="button" 
                              onClick={() => removeFile(index)}
                              className="p-1.5 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-md transition-colors"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </motion.li>
                        ))}
                      </AnimatePresence>
                    </ul>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 rounded-xl text-white font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-xl ${
                      isSubmitting 
                        ? 'bg-slate-400 cursor-not-allowed shadow-none' 
                        : 'bg-gradient-to-r from-brand-purple to-brand-blue hover:shadow-brand-purple/30 hover:opacity-90'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Αποστολή...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Αποστολή Μηνύματος</span>
                      </>
                    )}
                  </motion.button>
                  <p className="text-center text-xs text-slate-400 mt-4 flex items-center justify-center gap-1">
                    <Info className="w-3 h-3" /> Τα δεδομένα σας είναι ασφαλή και δεν μοιράζονται με τρίτους.
                  </p>
                </div>

              </form>
            </div>
          </motion.div>

          {/* RIGHT: INFO & FAQS */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-4 space-y-8"
          >
            {/* Contact Details Cards */}
            <div className="space-y-4">
              {CONTACT_DETAILS.map((detail, index) => {
                const Icon = detail.icon;
                return (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="glass bg-white/60 p-5 rounded-2xl flex items-center gap-4 hover:bg-white transition-colors border border-white/40"
                  >
                    <div className={`w-12 h-12 rounded-full ${detail.bgColor} flex items-center justify-center shrink-0`}>
                      <Icon className={`w-5 h-5 ${detail.color}`} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">{detail.title}</p>
                      <p className="text-slate-800 font-semibold">{detail.value}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{detail.subtitle}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Dynamic FAQ Section */}
            <motion.div 
              variants={itemVariants}
              className="glass bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-xl relative overflow-hidden"
            >
              {/* Decorative elements in FAQ card */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-brand-purple/30 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-brand-blue/30 rounded-full blur-2xl pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                    <Microscope className="w-5 h-5 text-brand-blue-light" />
                  </div>
                  <h3 className="text-xl font-bold">Συχνές Ερωτήσεις</h3>
                </div>
                
                <p className="text-slate-300 text-sm mb-6">
                  Δείτε αν η απάντηση που ψάχνετε βρίσκεται ήδη εδώ, με βάση την κατηγορία 
                  <span className="font-semibold text-brand-purple-light ml-1">
                    "{INQUIRY_TYPES.find(t => t.id === formData.inquiryType)?.label}"
                  </span>
                </p>

                <div className="space-y-3">
                  {displayFaqs.map((faq, index) => (
                    <div 
                      key={index} 
                      className="border border-white/10 rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10"
                    >
                      <button
                        onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                        className="w-full flex items-center justify-between p-4 text-left"
                      >
                        <span className="font-medium text-sm pr-4">{faq.question}</span>
                        <ChevronDown 
                          className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-300 ${activeFaq === index ? 'rotate-180' : ''}`} 
                        />
                      </button>
                      <AnimatePresence>
                        {activeFaq === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="p-4 pt-0 text-sm text-slate-300 leading-relaxed border-t border-white/5 mt-2">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                  <p className="text-xs text-slate-400">Δεν βρήκατε αυτό που ψάχνετε;</p>
                  <ArrowRight className="w-4 h-4 text-brand-purple-light animate-pulse" />
                </div>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </div>
  );
}

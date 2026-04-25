import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Lock, LogOut, Mail, CheckCircle2, AlertCircle, Eye, EyeOff, Shield, Save, KeyRound } from "lucide-react";
import { Navbar, Footer } from "../components/Layout";

// ─── Credential Storage ────────────────────────────────────────────────────────

const STORAGE_KEY = "fse_admin_creds";
const EMAIL_KEY = "fse_notification_email";
const DEFAULT_USER = "2026epoxy";
const DEFAULT_PASS = "2026epoxy";

function getCredentials() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
        try { return JSON.parse(stored); } catch { /* fall through */ }
    }
    return { username: DEFAULT_USER, password: DEFAULT_PASS };
}

function saveCredentials(username: string, password: string) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ username, password }));
}

function getNotificationEmail() {
    return localStorage.getItem(EMAIL_KEY) || "kevinfirststateepoxy@gmail.com";
}

function saveNotificationEmail(email: string) {
    localStorage.setItem(EMAIL_KEY, email);
}

// ─── Login Gate ────────────────────────────────────────────────────────────────

const LoginGate = ({ onLogin }: { onLogin: () => void }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPass, setShowPass] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        setTimeout(() => {
            const creds = getCredentials();
            if (username === creds.username && password === creds.password) {
                sessionStorage.setItem("fse_auth", "true");
                onLogin();
            } else {
                setError("Invalid credentials. Please try again.");
            }
            setLoading(false);
        }, 600);
    };

    return (
        <div className="min-h-screen bg-volt-black flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md"
            >
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-volt-lime mb-6">
                        <Lock size={28} className="text-volt-black" />
                    </div>
                    <h1 className="text-2xl font-black uppercase tracking-widest text-white mb-2">Admin Portal</h1>
                    <p className="text-white/40 text-sm">Authorized access only. Enter your credentials to continue.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-[10px] uppercase font-bold tracking-widest mb-2 text-white/50">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter username"
                            autoComplete="username"
                            className="w-full bg-white/5 border border-white/10 p-4 text-white focus:border-volt-lime outline-none transition-all placeholder:text-white/20"
                        />
                    </div>
                    <div>
                        <label className="block text-[10px] uppercase font-bold tracking-widest mb-2 text-white/50">Password</label>
                        <div className="relative">
                            <input
                                type={showPass ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter password"
                                autoComplete="current-password"
                                className="w-full bg-white/5 border border-white/10 p-4 pr-12 text-white focus:border-volt-lime outline-none transition-all placeholder:text-white/20"
                            />
                            <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors">
                                {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </div>

                    <AnimatePresence>
                        {error && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 border border-red-500/20 p-3"
                            >
                                <AlertCircle size={16} /> {error}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <button
                        type="submit"
                        disabled={!username.trim() || !password.trim() || loading}
                        className="w-full bg-volt-lime text-volt-black py-4 font-black uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {loading ? (
                            <><svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg> Verifying...</>
                        ) : "Sign In"}
                    </button>
                </form>
            </motion.div>
        </div>
    );
};

// ─── Dashboard ─────────────────────────────────────────────────────────────────

const Dashboard = ({ onLogout }: { onLogout: () => void }) => {
    const [email, setEmail] = useState(() => getNotificationEmail());
    const [pendingEmail, setPendingEmail] = useState(() => getNotificationEmail());
    const [emailSaved, setEmailSaved] = useState(false);

    const [currentPass, setCurrentPass] = useState("");
    const [newUser, setNewUser] = useState("");
    const [newPass, setNewPass] = useState("");
    const [credStatus, setCredStatus] = useState<"idle" | "success" | "error">("idle");
    const [credError, setCredError] = useState("");

    const emailChanged = pendingEmail.trim() !== email;

    const handleSaveEmail = () => {
        if (!pendingEmail.trim()) return;
        saveNotificationEmail(pendingEmail.trim());
        setEmail(pendingEmail.trim());
        setEmailSaved(true);
        setTimeout(() => setEmailSaved(false), 3000);
    };

    const handleUpdateCreds = (e: React.FormEvent) => {
        e.preventDefault();
        setCredError("");
        const creds = getCredentials();
        if (currentPass !== creds.password) {
            setCredError("Current password is incorrect.");
            setCredStatus("error");
            setTimeout(() => setCredStatus("idle"), 3000);
            return;
        }
        if (!newUser.trim() && !newPass.trim()) {
            setCredError("Enter a new username or password.");
            setCredStatus("error");
            setTimeout(() => setCredStatus("idle"), 3000);
            return;
        }
        saveCredentials(newUser.trim() || creds.username, newPass.trim() || creds.password);
        setCredStatus("success");
        setCurrentPass("");
        setNewUser("");
        setNewPass("");
        setTimeout(() => setCredStatus("idle"), 3000);
    };

    return (
        <div className="min-h-screen bg-volt-gray">
            <Navbar />
            <div className="pt-28 pb-24 px-4">
                <div className="max-w-3xl mx-auto">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-12">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight">Admin Portal</h1>
                            <p className="text-sm opacity-50 mt-1">Manage notifications and credentials</p>
                        </div>
                        <button onClick={onLogout} className="flex items-center gap-2 border-2 border-volt-black px-5 py-3 text-sm font-bold uppercase tracking-wider hover:bg-volt-black hover:text-white active:scale-95 transition-all">
                            <LogOut size={16} /> Log Out
                        </button>
                    </div>

                    {/* Email Notification Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white border-2 border-volt-black p-8 mb-8"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="bg-volt-lime p-2"><Mail size={20} className="text-volt-black" /></div>
                            <div>
                                <h2 className="font-black uppercase tracking-wider text-lg">Quote Notification Email</h2>
                                <p className="text-xs opacity-50">All quote requests will be sent to this email address</p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                value={pendingEmail}
                                onChange={(e) => setPendingEmail(e.target.value)}
                                placeholder="notification@email.com"
                                className="flex-1 border border-black/10 p-4 focus:border-volt-black outline-none transition-all placeholder:text-black/20"
                            />
                            <button
                                onClick={handleSaveEmail}
                                disabled={!emailChanged || !pendingEmail.trim()}
                                className="bg-volt-black text-white px-8 py-4 font-black uppercase tracking-widest hover:bg-volt-lime hover:text-volt-black active:scale-95 transition-all disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap"
                            >
                                {emailSaved ? <><CheckCircle2 size={18} /> Saved!</> : <><Save size={16} /> Save Email</>}
                            </button>
                        </div>

                        <div className="mt-4 flex items-center gap-2 text-xs opacity-40">
                            <Shield size={12} />
                            <span>Currently sending quotes to: <strong className="opacity-100">{email}</strong></span>
                        </div>
                    </motion.div>

                    {/* Credentials Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white border-2 border-volt-black p-8"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="bg-volt-lime p-2"><KeyRound size={20} className="text-volt-black" /></div>
                            <div>
                                <h2 className="font-black uppercase tracking-wider text-lg">Update Credentials</h2>
                                <p className="text-xs opacity-50">Change your admin username and password</p>
                            </div>
                        </div>

                        <form onSubmit={handleUpdateCreds} className="space-y-4">
                            <div>
                                <label className="block text-[10px] uppercase font-bold tracking-widest mb-2 opacity-60">Current Password *</label>
                                <input type="password" value={currentPass} onChange={(e) => setCurrentPass(e.target.value)} placeholder="Enter current password" className="w-full border border-black/10 p-4 focus:border-volt-black outline-none transition-all placeholder:text-black/20" />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[10px] uppercase font-bold tracking-widest mb-2 opacity-60">New Username</label>
                                    <input type="text" value={newUser} onChange={(e) => setNewUser(e.target.value)} placeholder="Leave blank to keep" className="w-full border border-black/10 p-4 focus:border-volt-black outline-none transition-all placeholder:text-black/20" />
                                </div>
                                <div>
                                    <label className="block text-[10px] uppercase font-bold tracking-widest mb-2 opacity-60">New Password</label>
                                    <input type="password" value={newPass} onChange={(e) => setNewPass(e.target.value)} placeholder="Leave blank to keep" className="w-full border border-black/10 p-4 focus:border-volt-black outline-none transition-all placeholder:text-black/20" />
                                </div>
                            </div>

                            <AnimatePresence>
                                {credStatus === "error" && credError && (
                                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="flex items-center gap-2 text-red-500 text-sm bg-red-50 border border-red-200 p-3">
                                        <AlertCircle size={16} /> {credError}
                                    </motion.div>
                                )}
                                {credStatus === "success" && (
                                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="flex items-center gap-2 text-green-600 text-sm bg-green-50 border border-green-200 p-3">
                                        <CheckCircle2 size={16} /> Credentials updated successfully.
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <button
                                type="submit"
                                disabled={!currentPass.trim()}
                                className="w-full bg-volt-black text-white py-4 font-black uppercase tracking-widest hover:bg-volt-lime hover:text-volt-black active:scale-95 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                            >
                                Update Credentials
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

// ─── Admin Page ────────────────────────────────────────────────────────────────

export default function Admin() {
    const [authed, setAuthed] = useState(() => sessionStorage.getItem("fse_auth") === "true");

    const handleLogout = () => {
        sessionStorage.removeItem("fse_auth");
        setAuthed(false);
    };

    if (!authed) return <LoginGate onLogin={() => setAuthed(true)} />;
    return <Dashboard onLogout={handleLogout} />;
}

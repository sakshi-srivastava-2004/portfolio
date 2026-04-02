import { Mail, Send } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { cn } from "@/lib/utils";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

export const ContactSection = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // 👇 Web3Forms - no backend needed
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const form = new FormData();
            form.append("access_key", "cc5f0f26-4337-4d0e-a793-a84ee7bf92e0");  // 👈 paste your key from web3forms.com
            form.append("name", formData.name);
            form.append("email", formData.email);
            form.append("message", formData.message);

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: form,
            });

            const data = await response.json();

            if (response.ok) {
                toast.success("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            } else {
                toast.error("Error: " + data.message);
            }

        } catch (error) {
            toast.error("Something went wrong. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <Toaster position="top-right" />
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Feel free to reach out
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* LEFT COLUMN */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">
                                    <a href="mailto:sri.sakshi2026@gmail.com"
                                        className="text-muted-foreground hover:text-primary transition-colors">
                                        Email
                                    </a>
                                    </h4>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <FaLinkedin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">
                                    <a href="https://www.linkedin.com/in/sakshi-srivastava-058718300/"
                                        className="text-muted-foreground hover:text-primary transition-colors">
                                        LinkedIn
                                        </a>
                                        </h4>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="your@gmail.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Any message for me....."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className={cn(
                                    "cosmic-button w-full flex items-center justify-center gap-2",
                                    isLoading && "opacity-70 cursor-not-allowed"
                                )}
                            >
                                {isLoading ? "Sending..." : <>Send Message <Send size={16} /></>}
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};


export function Contacts() {
    return (
        <div className="flex flex-col min-h-screen bg-bg text-white pb-24 items-center justify-center">
            <div className="flex-grow max-w-4xl text-center space-y-8 pt-20 md:pt-24">
                <h1 className="text-3xl md:text-5xl font-extrabold text-primary">Contact Me</h1>
                <p className="text-base md:text-lg leading-relaxed">I offer a range of services to help you bring your ideas to life.
                    Whether you need a website, app, or design consultation, I'm here to help.</p>
                <form className="bg-bg p-4 md:p-6 rounded-lg shadow-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="name" className="block text-base md:text-lg font-semibold mb-2">Name</label>
                            <input type="text" id="name" name="name" className="w-full p-2 rounded-lg bg-gray-800 border border-primary 
                            text-white placeholder-gray-400" placeholder="Your Name" required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-base md:text-lg font-semibold mb-2">Email</label>
                            <input type="email" id="email" name="email" className="w-full p-2 rounded-lg bg-gray-800 border 
                            border-primary text-white placeholder-gray-400" placeholder="Your Email" required />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="message" className="block text-base md:text-lg font-semibold mb-2">Message</label>
                        <textarea id="message" name="message" rows={4} className="w-full p-2 rounded-lg bg-gray-800 border 
                        border-primary text-white placeholder-gray-400" placeholder="Your Message" required></textarea>
                    </div>
                    <button type="submit" className="mt-4 bg-primary text-bg px-4 md:px-6 py-2 md:py-3 rounded-lg 
                    font-semibold shadow-lg hover:scale-105 transition duration-300">Send Message</button>
                </form>
                <div className="mt-8">
                    <p className="text-base md:text-lg mb-4">Or connect with me on social media</p>
                    <div className="flex justify-center space-x-4 md:space-x-6">
                        <a href="https://www.linkedin.com/in/ravindu-dinushan-60709227b/" target="_blank" rel="noopener noreferrer"
                            className="text-primary hover:scale-105 transition duration-300 text-lg">
                            <i className="fab fa-linkedin-in fa-2x"></i>
                        </a>
                        <a href="https://github.com/ravindudinushan" target="_blank" rel="noopener noreferrer"
                            className="text-primary hover:scale-105 transition duration-300 text-lg">
                            <i className="fab fa-github fa-2x"></i>
                        </a>
                        <a href="https://web.facebook.com/people/Ravindu-Dinushan/pfbid0A2QTtgYTDGJfQJADQtmtWWkiVYpXRSwVwbodBQGrMRDdN1QrtmHS9fBm7kE8tdDol/" target="_blank" rel="noopener noreferrer"
                            className="text-primary hover:scale-105 transition duration-300 text-lg">
                            <i className="fab fa-facebook fa-2x"></i>
                        </a>
                        <a href="https://x.com/Ravindu9966" target="_blank" rel="noopener noreferrer"
                            className="text-primary hover:scale-105 transition duration-300 text-lg">
                            <i className="fab fa-x-twitter fa-2x"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
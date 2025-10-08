// Kabarza ASCII Art Injector
// Version: 1.0.2
// Author: Kabarza Agency

(function() {
    'use strict';
    
    // ASCII Art Content for HTML head
    const asciiArt = `
    
    ██╗  ██╗ █████╗ ██████╗  █████╗ ██████╗ ███████╗ █████╗ 
    ██║ ██╔╝██╔══██╗██╔══██╗██╔══██╗██╔══██╗╚══███╔╝██╔══██╗
    █████╔╝ ███████║██████╔╝███████║██████╔╝  ███╔╝ ███████║
    ██╔═██╗ ██╔══██║██╔══██╗██╔══██║██╔══██╗ ███╔╝  ██╔══██║
    ██║  ██╗██║  ██║██████╔╝██║  ██║██║  ██║███████╗██║  ██║
    ╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝
                                                            
    🎓 Welcome to Kabarza Agency!
    👨‍💻 If you're reading this, you're a curious developer!
    🚀 Join us at: https://kabarza.com
    
    `;

    const consoleArt = `
██╗  ██╗ █████╗ ██████╗  █████╗ ██████╗ ███████╗ █████╗ 
██║ ██╔╝██╔══██╗██╔══██╗██╔══██╗██╔══██╗╚══███╔╝██╔══██╗
█████╔╝ ███████║██████╔╝███████║██████╔╝  ███╔╝ ███████║
██╔═██╗ ██╔══██║██╔══██╗██╔══██║██╔══██╗ ███╔╝  ██╔══██║
██║  ██╗██║  ██║██████╔╝██║  ██║██║  ██║███████╗██║  ██║
╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝
                                                        
🎉 Welcome to Kabarza Agency!
👨‍💻 You opened the console - you're our kind of person!
🚀 Check out our courses at: https://kabarza.com
💡 Type "kabarza()" for a surprise!`;

    // Function to inject ASCII art into HTML head
    function injectAsciiToHead() {
        try {
            // Create comment node with ASCII art
            const comment = document.createComment(asciiArt);
            
            // Insert at the beginning of head
            const head = document.head || document.getElementsByTagName('head')[0];
            if (head && head.firstChild) {
                head.insertBefore(comment, head.firstChild);
            } else if (head) {
                head.appendChild(comment);
            }
            
            console.log('✅ Kabarza ASCII art injected successfully!');
        } catch (error) {
            console.error('❌ Error injecting ASCII art:', error);
        }
    }

    // Function to show console message
    function showConsoleMessage() {
        try {
            console.log(consoleArt);
            
            // Add hidden function for curious developers
            window.kabarza = function() {
                alert('🎉 You found the Kabarza secret! Welcome to our agency!');
                console.log('🚀 Visit us at: https://kabarza.com');
            };
            
        } catch (error) {
            console.error('❌ Error showing console message:', error);
        }
    }

    // Function to add footer ASCII art
    function injectAsciiToFooter() {
        try {
            const footerAscii = `

╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║    ██╗  ██╗ █████╗ ██████╗  █████╗ ██████╗ ███████╗ █████╗   ║
║    ██║ ██╔╝██╔══██╗██╔══██╗██╔══██╗██╔══██╗╚══███╔╝██╔══██╗  ║
║    █████╔╝ ███████║██████╔╝███████║██████╔╝  ███╔╝ ███████║  ║
║    ██╔═██╗ ██╔══██║██╔══██╗██╔══██║██╔══██╗ ███╔╝  ██╔══██║  ║
║    ██║  ██╗██║  ██║██████╔╝██║  ██║██║  ██║███████╗██║  ██║  ║
║    ╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝  ║
║                                                              ║
║                        AGENCY                                ║
║                                                              ║
║    🎓 Thanks for checking our source code!                   ║
║    💡 We appreciate developers who dig deeper                ║
║    🚀 Visit us: https://kabarza.com                          ║
║    📧 Contact: contact@kabarza.com                           ║
║                                                              ║
║    Made with ❤️ by Kabarza Agency Team                       ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝

`;
            
            const comment = document.createComment(footerAscii);
            document.body.appendChild(comment);
            
        } catch (error) {
            console.error('❌ Error injecting footer ASCII:', error);
        }
    }

    // Initialize when DOM is ready
    function init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function() {
                injectAsciiToHead();
                showConsoleMessage();
                injectAsciiToFooter();
            });
        } else {
            injectAsciiToHead();
            showConsoleMessage();
            injectAsciiToFooter();
        }
    }

    // Start the magic!
    init();

})();

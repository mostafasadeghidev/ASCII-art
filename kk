<!-- کد برای Webflow Head Code -->
<!-- این کد فایل GitHub را می‌خواند و ASCII art را در source قرار می‌دهد -->

<script>
(async function() {
    try {
        // آدرس فایل GitHub شما
        const githubUrl = 'https://raw.githubusercontent.com/mostafasadeghidev/ASCII-art/refs/heads/main/kabarza.js';
        
        // خواندن فایل از GitHub
        const response = await fetch(githubUrl);
        const jsCode = await response.text();
        
        // استخراج ASCII art از کد JavaScript
        const asciiMatch = jsCode.match(/const asciiArt = `([\s\S]*?)`;/);
        const consoleMatch = jsCode.match(/const consoleArt = `([\s\S]*?)`;/);
        const footerMatch = jsCode.match(/const footerAscii = `([\s\S]*?)`;/);
        
        if (asciiMatch && asciiMatch[1]) {
            // اضافه کردن ASCII art به head به صورت کامنت
            const comment = document.createComment(asciiMatch[1].trim());
            const head = document.head;
            if (head && head.firstChild) {
                head.insertBefore(comment, head.firstChild);
            }
            console.log('✅ ASCII art از GitHub لود شد و در source قرار گرفت!');
        }
        
        if (consoleMatch && consoleMatch[1]) {
            // نمایش در console
            console.log(consoleMatch[1].trim());
        }
        
        if (footerMatch && footerMatch[1]) {
            // اضافه کردن footer ASCII
            const footerComment = document.createComment(footerMatch[1].trim());
            document.body.appendChild(footerComment);
        }
        
        // اضافه کردن تابع kabarza
        window.kabarza = function() {
            alert('🎉 You found the Kabarza secret! Welcome to our agency!');
            console.log('🚀 Visit us at: https://kabarza.com');
        };
        
        console.log('💡 Type "kabarza()" for a surprise!');
        
    } catch (error) {
        console.error('❌ خطا در لود کردن فایل GitHub:', error);
        
        // در صورت خطا، ASCII art پیش‌فرض
        const fallbackAscii = `
    
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
        
        const comment = document.createComment(fallbackAscii);
        const head = document.head;
        if (head && head.firstChild) {
            head.insertBefore(comment, head.firstChild);
        }
        
        console.log(fallbackAscii);
        window.kabarza = () => alert('🎉 Fallback Kabarza secret!');
    }
})();
</script>

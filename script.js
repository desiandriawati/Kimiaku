// ===== NAVIGATION MOBILE TOGGLE =====
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close menu when a link is clicked
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu) navMenu.classList.remove('active');
    });
});

// ===== MODAL FUNCTIONALITY =====
const modal = document.getElementById('topikModal');
let topikDescriptions = null;
if (modal) {
    topikDescriptions = {
    'Struktur Atom': {
        description: 'Pahami dasar-dasar atom, proton, neutron, dan elektron',
        content: `
            <h4>Apa yang akan dipelajari:</h4>
            <ul style="text-align: left; margin: 15px 0; padding-left: 20px;">
                <li>Pengertian atom dan partikel penyusunnya</li>
                <li>Model atom Bohr dan Rutherford</li>
                <li>Konfigurasi elektron</li>
                <li>Bilangan kuantum dan orbital</li>
            </ul>
            <p style="margin: 15px 0; text-align: justify;">Struktur atom adalah fondasi dari seluruh kimia. Melalui pembelajaran ini, Anda akan memahami bagaimana atom disusun dan bagaimana elektron bergerak di sekitar inti.</p>
        `
    },
    'Ikatan Kimia': {
        description: 'Pelajari bagaimana atom terikat satu sama lain',
        content: `
            <h4>Topik yang dicakup:</h4>
            <ul style="text-align: left; margin: 15px 0; padding-left: 20px;">
                <li>Ikatan kovalen (tunggal, rangkap, tiga)</li>
                <li>Ikatan ionik</li>
                <li>Ikatan logam</li>
                <li>Gaya intermolekul (Van der Waals, hidrogen)</li>
            </ul>
            <p style="margin: 15px 0; text-align: justify;">Ikatan kimia menentukan sifat-sifat materi. Pelajari jenis-jenis ikatan dan bagaimana mereka mempengaruhi properti senyawa.</p>
        `
    },
    'Reaksi Kimia': {
        description: 'Kuasai persamaan dan jenis-jenis reaksi',
        content: `
            <h4>Materi pembelajaran:</h4>
            <ul style="text-align: left; margin: 15px 0; padding-left: 20px;">
                <li>Persamaan reaksi dan penyetaraan</li>
                <li>Reaksi dekomposisi dan kombinasi</li>
                <li>Reaksi redoks</li>
                <li>Stoikiometri dan perhitungan massa</li>
            </ul>
            <p style="margin: 15px 0; text-align: justify;">Reaksi kimia adalah inti dari kimia. Belajar menulis dan menyetarakan persamaan reaksi adalah keterampilan penting yang akan Anda kuasai.</p>
        `
    },
    'Tabel Periodik': {
        description: 'Mengenal elemen dan pengelompokannya',
        content: `
            <h4>Pembelajaran mencakup:</h4>
            <ul style="text-align: left; margin: 15px 0; padding-left: 20px;">
                <li>Sejarah perkembangan tabel periodik</li>
                <li>Organisasi elemen per periode dan golongan</li>
                <li>Sifat-sifat periodik (elektronegativitas, jari-jari atom)</li>
                <li>Keluarga elemen (logam, nonlogam, metaloid)</li>
            </ul>
            <p style="margin: 15px 0; text-align: justify;">Tabel periodik adalah peta dunia kimia. Memahami susunan dan pola elemen akan membuat belajar kimia menjadi lebih mudah.</p>
        `
    },
    'Termodinamika': {
        description: 'Energi, kalor, dan entropi dalam reaksi',
        content: `
            <h4>Topik utama:</h4>
            <ul style="text-align: left; margin: 15px 0; padding-left: 20px;">
                <li>Energi dan hukum termodinamika</li>
                <li>Entalpi dan perubahan kalor</li>
                <li>Entropi dan energi Gibbs</li>
                <li>Efisiensi termal dan aplikasi praktis</li>
            </ul>
            <p style="margin: 15px 0; text-align: justify;">Termodinamika menjelaskan mengapa reaksi terjadi. Kuasai konsep energi dan Anda akan memahami semua proses kimia.</p>
        `
    },
    'Kimia Organik': {
        description: 'Mempelajari senyawa karbon dan struktur molekul',
        content: `
            <h4>Cakupan pembelajaran:</h4>
            <ul style="text-align: left; margin: 15px 0; padding-left: 20px;">
                <li>Senyawa karbon dan hidrokarbon</li>
                <li>Alkana, alkena, dan alkuna</li>
                <li>Gugus fungsional dan reaksi organik</li>
                <li>Isomer dan stereoisomer</li>
            </ul>
            <p style="margin: 15px 0; text-align: justify;">Kimia organik adalah kimia kehidupan. Pelajari senyawa karbon yang membentuk semua makhluk hidup dan banyak produk synthetic.</p>
        `
    }
    };

    function selectTopik(element, topik) {
        const desc = topikDescriptions[topik];
        const titleEl = document.getElementById('modalTitle');
        const descEl = document.getElementById('modalDesc');
        const contentEl = document.getElementById('modalContent');
        if (!desc || !titleEl || !descEl || !contentEl) return;
        titleEl.textContent = topik;
        descEl.textContent = desc.description;
        contentEl.innerHTML = desc.content;
        modal.style.display = 'block';
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    window.addEventListener('click', function(event) {
        if (event.target === modal) closeModal();
    });

    function mulaiPelajaran() {
        alert('Terima kasih telah memilih pelajaran ini! Untuk mengakses konten lengkap, silakan mendaftar atau login ke platform kami.');
        closeModal();
    }
}

// ===== QUIZ FUNCTIONALITY =====
function checkAnswer() {
    const selected = document.querySelector('input[name="quiz1"]:checked');
    
    if (!selected) {
        alert('Pilih salah satu jawaban terlebih dahulu!');
        return;
    }

    const result = document.getElementById('quizResult');
    
    if (selected.value === 'c') {
        result.textContent = '✓ Benar! Atom karbon memiliki 6 proton. Selamat! Anda memahami materi ini dengan baik.';
        result.className = 'correct';
    } else {
        result.textContent = '✗ Salah. Atom karbon memiliki 6 proton karena nomor atomnya adalah 6. Coba lagi dan pelajari lebih lanjut!';
        result.className = 'incorrect';
    }
    
    result.style.display = 'block';
}

// ===== FORM SUBMISSION =====
const kontakForm = document.querySelector('.kontak-form');
if (kontakForm) {
    kontakForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const inputs = this.querySelectorAll('input, textarea');
        const formData = {};
        inputs.forEach(input => {
            if (input.value.trim() !== '') formData[input.placeholder] = input.value;
        });
        alert('Terima kasih ' + (formData['Nama Anda'] || '') + '! Pesan Anda telah dikirim. Kami akan menghubungi Anda segera melalui email: ' + (formData['Email Anda'] || ''));
        this.reset();
    });
}

// ===== SCROLL ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.fitur-card, .topik-card, .testimonial-card, .stat-card, .kontak-card').forEach(element => {
    element.style.opacity = '0';
    observer.observe(element);
});

// ===== SMOOTH SCROLL BEHAVIOR =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '#home') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ===== ADD SCROLL EFFECT TO NAVBAR =====
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
    }
});

// ===== COUNTER ANIMATION =====
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Trigger counter animation when stats section is visible
const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
            entry.target.dataset.animated = 'true';
            document.querySelectorAll('.stat-number').forEach(stat => {
                const value = stat.textContent.replace(/[^\d]/g, '');
                animateCounter(stat, parseInt(value));
            });
            statObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.tentang-stats');
if (statsSection) {
    statObserver.observe(statsSection);
}

// ===== HOVER EFFECTS FOR CARDS =====
document.querySelectorAll('.fitur-card, .topik-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ===== LAZY LOADING IMAGES (IF USED IN FUTURE) =====
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===== ACCESSIBILITY IMPROVEMENTS =====
// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    // Close modal with Escape key (only if modal exists)
    if (e.key === 'Escape' && modal && modal.style && modal.style.display === 'block') {
        if (typeof closeModal === 'function') closeModal();
    }
});

// ===== PERFORMANCE OPTIMIZATION =====
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounced scroll handler
window.addEventListener('scroll', debounce(() => {
    // Scroll event handler
}, 250));

// ===== DARK MODE TOGGLE (Optional Future Feature) =====
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Load dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

// ===== LOG MESSAGE FOR DEBUGGING =====
console.log('✓ ChemMaster Website loaded successfully!');
console.log('Welcome to Interactive Chemistry Learning Platform');

// ===== MONITORING & DATA HANDLER =====
(function() {
    if (!document.getElementById('monitor-app')) return;

    const STORAGE_KEY = 'kimia_readings_v1';
    let readings = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');

    const form = document.getElementById('readingForm');
    const phInput = document.getElementById('phInput');
    const tempInput = document.getElementById('tempInput');
    const colorInput = document.getElementById('colorInput');
    const noteInput = document.getElementById('noteInput');
    const tableBody = document.querySelector('#readingsTable tbody');
    const chartCanvas = document.getElementById('chartCanvas');

    function escapeCSV(value) {
        const s = String(value ?? '');
        // Escape quotes by doubling them, then wrap in quotes if needed
        const needsQuotes = /[",\n\r]/.test(s);
        const escaped = s.replace(/"/g, '""');
        return needsQuotes ? `"${escaped}"` : escaped;
    }

    function save() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(readings));
    }

    function addReading(ph, temp, color, note) {
        const entry = { ts: new Date().toISOString(), ph: Number(ph), temp: Number(temp), color, note };
        readings.push(entry);
        save();
        render();
    }

    function clearAll() {
        if (!confirm('Hapus semua data monitoring?')) return;
        readings = [];
        save();
        render();
    }

    function exportCSV() {
        if (!readings.length) { alert('Tidak ada data untuk diekspor.'); return; }
        const rows = [['waktu','pH','suhu_C','warna','catatan']];
        readings.forEach(r => rows.push([r.ts, r.ph, r.temp, r.color, escapeCSV(r.note)]));
        const csv = rows.map(r => r.join(',')).join('\n');
        const blob = new Blob([csv], {type: 'text/csv'});
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url; a.download = 'kimia_readings.csv';
        document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
    }

    function renderTable() {
        tableBody.innerHTML = '';
        readings.slice().reverse().forEach((r, i) => {
            const tr = document.createElement('tr');
            const idx = readings.length - i;
            tr.innerHTML = `<td>${idx}</td><td>${new Date(r.ts).toLocaleString()}</td><td>${r.ph}</td><td>${r.temp}</td><td><span class="color-swatch" style="background:${r.color}"></span></td><td>${(r.note||'')}</td>`;
            tableBody.appendChild(tr);
        });
    }

    function renderChart() {
        if (!chartCanvas) return;
        const ctx = chartCanvas.getContext('2d');

        // Make canvas responsive and crisp on HiDPI screens
        const dpr = Math.max(1, window.devicePixelRatio || 1);
        const cssW = Math.max(320, chartCanvas.clientWidth || 900);
        const cssH = Math.max(220, chartCanvas.clientHeight || 260);
        const w = Math.floor(cssW * dpr);
        const h = Math.floor(cssH * dpr);
        if (chartCanvas.width !== w || chartCanvas.height !== h) {
            chartCanvas.width = w;
            chartCanvas.height = h;
        }
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        const drawW = cssW;
        const drawH = cssH;

        ctx.clearRect(0, 0, drawW, drawH);
        if (!readings.length) {
            ctx.fillStyle = '#999';
            ctx.font = '16px sans-serif';
            ctx.fillText('Belum ada data', 12, 28);
            return;
        }

        // Prepare data (last 50 points)
        const data = readings.slice(-50);
        const phs = data.map(d => d.ph);
        const temps = data.map(d => d.temp);

        const margin = 40;
        const plotW = drawW - margin*2; const plotH = drawH - margin*2;

        // scales
        const phMin = 0, phMax = 14;
        const tMin = Math.min(...temps) - 1; const tMax = Math.max(...temps) + 1;

        function x(i) { return margin + (i / (data.length-1 || 1)) * plotW; }
        function yPh(v) { return margin + plotH - ((v - phMin)/(phMax-phMin))*plotH; }
        function yT(v) { return margin + plotH - ((v - tMin)/(tMax-tMin))*plotH; }

        // axes
        ctx.strokeStyle = '#ddd'; ctx.lineWidth = 1;
        ctx.strokeRect(margin, margin, plotW, plotH);

        // draw PH line
        ctx.beginPath(); ctx.lineWidth = 2; ctx.strokeStyle = '#ff7f50';
        data.forEach((d, i) => { const px = x(i), py = yPh(d.ph); if (i===0) ctx.moveTo(px,py); else ctx.lineTo(px,py); }); ctx.stroke();

        // draw Temp line
        ctx.beginPath(); ctx.lineWidth = 2; ctx.strokeStyle = '#00a8cc';
        data.forEach((d, i) => { const px = x(i), py = yT(d.temp); if (i===0) ctx.moveTo(px,py); else ctx.lineTo(px,py); }); ctx.stroke();

        // draw points with color swatch
        data.forEach((d, i) => {
            const px = x(i);
            // ph point
            ctx.fillStyle = '#ff7f50'; ctx.beginPath(); ctx.arc(px, yPh(d.ph), 3, 0, Math.PI*2); ctx.fill();
            // temp point
            ctx.fillStyle = '#00a8cc'; ctx.beginPath(); ctx.arc(px, yT(d.temp), 3, 0, Math.PI*2); ctx.fill();
            // color box
            ctx.fillStyle = d.color; ctx.fillRect(px-8, margin+plotH+8, 16, 12);
            ctx.strokeStyle = '#333'; ctx.strokeRect(px-8, margin+plotH+8, 16, 12);
        });

        // legend
        ctx.fillStyle = '#333'; ctx.font = '13px sans-serif';
        ctx.fillText('pH', margin, margin-10); ctx.fillStyle='#ff7f50'; ctx.fillRect(margin+28, margin-18, 12, 8);
        ctx.fillStyle = '#333'; ctx.fillText('Suhu (°C)', margin+80, margin-10); ctx.fillStyle='#00a8cc'; ctx.fillRect(margin+160, margin-18, 12, 8);
    }

    function render() { renderTable(); renderChart(); }

    // init
    render();

    form.addEventListener('submit', function(e){
        e.preventDefault();
        addReading(phInput.value, tempInput.value, colorInput.value, noteInput.value);
        form.reset(); colorInput.value = '#ff0000';
    });

    document.getElementById('clearBtn').addEventListener('click', clearAll);
    document.getElementById('exportBtn').addEventListener('click', exportCSV);

    // redraw on resize (debounced via rAF)
    let resizeRAF = 0;
    window.addEventListener('resize', function() {
        if (!chartCanvas) return;
        cancelAnimationFrame(resizeRAF);
        resizeRAF = requestAnimationFrame(() => renderChart());
    });

})();


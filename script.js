        // --- DATABASE & SESSION ---
        let isLoggedIn = false;
        let currentUser = null;
        let cart = [];
        let currentFilter = 'Japan';

        const DESTINATIONS = [
            { id: 1, country: "Japan", name: "TOKYO", subtitle: "NEON DISTRICT", price: 1200, image: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?q=80&w=1200", description: "Tokyo, the dynamic capital, stands as a mesmerizing blend of ultramodern innovation and time-honored tradition. Under the crimson moonlight, the city transforms into a sprawling labyrinth of neon and shadow. From the scramble crossing of Shibuya to the ancient Senso-ji Temple, every corner tells a story of the Dragon's legacy. Experience the pulse of a city that never sleeps." },
            { id: 2, country: "Japan", name: "KYOTO", subtitle: "ANCIENT CAPITAL", price: 1100, image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200", description: "Kyoto is the cultural heart of Japan, a city where time seems to stand still amidst thousands of temples, shrines, and meticulously manicured Zen gardens. Once the imperial capital for over a millennium, it is famous for iconic sights like the shimmering Kinkaku-ji (Golden Pavilion) and the endless vermilion gates of Fushimi Inari-taisha. Walking through the historic Gion district at dusk, you might still catch a glimpse of a geiko (geisha) disappearing into a wooden teahouse, while the serene Arashiyama Bamboo Grove offers a peaceful escape into nature. It is a city of refined traditions, from the formal tea ceremony to seasonal \"Kaiseki\" dining, making it the ultimate destination for those seeking the \"old Japan.\"" },
            { id: 3, country: "Japan", name: "OSAKA", subtitle: "STEEL CITY", price: 950, image: "https://images.unsplash.com/photo-1590559899731-a382839e5549?q=80&w=1200", description: "Osaka is Kyoto’s bold, energetic, and slightly rebellious neighbor, known as \"Japan’s Kitchen\" for its incredible obsession with food. The city pulses with a neon-lit intensity, particularly in the Dotonbori district, where massive mechanical signs and street food stalls serve up local favorites like Takoyaki (octopus balls) and Okonomiyaki (savory pancakes). While it boasts historical landmarks like the grand Osaka Castle, the city’s true charm lies in its outgoing people and \"Kuidaore\" philosophy—literally meaning \"to eat until you drop.\" From the retro vibes of the Shinsekai neighborhood to the world-class thrills of Universal Studios Japan, Osaka offers a gritty, fun, and unpretentious atmosphere that stands in stark contrast to the quiet dignity of Kyoto." },
            { id: 4, country: "Japan", name: "HAKONE", subtitle: "MISTY PEAKS", price: 800, image: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?q=80&w=1200", description: "Hakone is a scenic mountain escape nestled in the foothills of Mount Fuji, offering a breath of fresh air and a chance to experience Japan’s famous \"Onsen\" (hot spring) culture. Most visitors follow the \"Hakone Loop,\" a seamless journey involving mountain railways, cable cars, and a cruise across the volcanic Lake Ashi on a replica pirate ship. On clear days, the views of Mount Fuji reflecting in the water are legendary, particularly framed by the floating red \"torii\" gate of the Hakone Shrine. Whether you are eating \"black eggs\" boiled in the sulfuric vents of Owakudani or soaking in an open-air bath at a traditional Ryokan (inn), Hakone provides a deeply relaxing retreat into Japan's volcanic landscape." },
            { id: 5, country: "France", name: "PARIS", subtitle: "CITY OF LIGHTS", price: 1500, image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200", description: "Paris is the grand, historic heart of France, often called the \"City of Light\" for its role in the Enlightenment and its dazzling nighttime glow. As you wander through its famous arrondissements, you’ll encounter iconic landmarks like the Eiffel Tower, the Louvre, and the newly reopened Notre-Dame Cathedral, all while feeling the city's unmistakable \"main-character energy.\" Beyond the monuments, the soul of Paris is found in its neighborhood bistros, the aroma of fresh croissants in Montmartre, and romantic walks along the Seine at sunset. In 2026, the city remains the ultimate fashion and cultural capital, blending a fast-paced global atmosphere with the timeless charm of its leafy avenues and historic cafes." },
            { id: 6, country: "France", name: "NICE", subtitle: "AZURE COAST", price: 1350, image: "https://images.unsplash.com/photo-1503696967350-ad1874122058?q=80&w=1200", description: "Nice is the sun-drenched crown jewel of the French Riviera, where the vibrant blue of the Mediterranean Sea meets a unique blend of French and Italian culture. The city is defined by the Promenade des Anglais, a palm-lined boulevard that stretches along the pebble beaches of the Bay of Angels, perfect for a morning jog or a relaxed sunset stroll. In the narrow, ochre-colored streets of Vieux Nice (Old Town), you’ll find bustling markets selling local specialties like \"Socca\" (chickpea pancakes) and flowers, while the surrounding hills offer world-class museums dedicated to artists like Matisse and Chagall. It is a city that invites you to slow down, enjoy the \"Niçoise\" lifestyle, and soak in the bright, artistic light that has attracted travelers for centuries."},
            { id: 7, country: "France", name: "LYON", subtitle: "CULINARY HAVEN", price: 1250, image: "https://plus.unsplash.com/premium_photo-1742457859287-8f189f13e6aa?q=80&w=1200", description: "Lyon is widely considered the gastronomic capital of the world, a title it earns through its legendary \"Bouchons\"—traditional restaurants serving hearty, authentic Lyonnaise cuisine. Situated at the confluence of the Rhône and Saône rivers, the city is a living museum of architectural history, ranging from ancient Roman theaters on Fourvière Hill to the secret Renaissance passageways known as \"Traboules\" in the Old Town. While it feels more relaxed than Paris, Lyon is a vibrant hub of innovation and art, featuring the futuristic Musée des Confluences and a thriving silk-weaving heritage. It is the perfect destination for travelers who want to dive deep into French history and food without the intense crowds of the capital." },
            { id: 8, country: "France", name: "BORDEAUX", subtitle: "WINE COUNTRY", price: 1400, image: "https://images.unsplash.com/photo-1707257833324-365c896c607a?q=80&w=1200", description: "Bordeaux is an elegant, stone-carved city known globally as the wine capital of France, but its appeal extends far beyond its prestigious vineyards. Reinvigorated in recent years, the city’s 18th-century neoclassical architecture is a UNESCO World Heritage site, centered around the stunning Miroir d’Eau, a giant reflecting pool that mirrors the grand Place de la Bourse. The city serves as a gateway to the famous estates of Saint-Émilion and Médoc, yet the city center itself is a walkable paradise of high-end boutiques, vibrant food markets, and the futuristic Cité du Vin museum. With its proximity to the Atlantic coast and a refined, airy atmosphere, Bordeaux offers a sophisticated mix of urban grandeur and rural charm." },
            { id: 9, country: "China", name: "BEIJING", subtitle: "FORBIDDEN CITY", price: 1300, image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=1200", description: "Beijing is the grand, historic heart of China, where the echoes of ancient dynasties meet the hum of a global superpower. As you wander through its massive landmarks like the Forbidden City and the Temple of Heaven, you’re walking through centuries of imperial power, while a trip to the Great Wall on the city's outskirts offers some of the most iconic landscapes on earth. Beyond the stone monuments, the city’s soul is found in its Hutongs—narrow, grey-brick alleyways where locals live much as they have for generations—and in its world-famous Peking Duck dinners. In 2026, the city feels more accessible than ever, blending these ancient traditions with cutting-edge art districts like 798 and high-speed transit that makes exploring the \"Central Axis\" a seamless experience." },
            { id: 10, country: "China", name: "SHANGHAI", subtitle: "THE BUND", price: 1400, image: "https://images.unsplash.com/photo-1506158278516-d720e72406fc?q=80&w=1200", description: "Shanghai is a dazzling, neon-lit glimpse into the future, standing as China's most cosmopolitan and energetic metropolis. Bounded by the Huangpu River, the city offers a dramatic visual contrast: on one side lies The Bund, with its elegant colonial-era architecture, and on the other, the soaring skyscrapers of Pudong, including the world-class Shanghai Tower. It is a shopper's paradise and a culinary hub where Michelin-starred dining sits alongside street stalls selling steaming Xiaolongbao (soup dumplings). Whether you are exploring the leafy, European-style streets of the French Concession or experiencing the magic of Shanghai Disneyland, the city pulses with an international flair that makes it feel like the \"Paris of the East\"." },
            { id: 11, country: "China", name: "XI’AN", subtitle: "The Ancient Gateway", price: 1100, image: "https://images.unsplash.com/photo-1715473057495-47e412c32bbc?q=80&w=1200", description: "Xi’an serves as a living museum of Chinese civilization, famously known as the eastern starting point of the Silk Road. Its crown jewel is the Terracotta Army, an awe-inspiring collection of thousands of life-sized clay soldiers that have guarded an emperor's tomb for over 2,000 years. The city itself is uniquely defined by its massive, rectangular Ancient City Wall, which you can cycle across at sunset for a panoramic view of the old and new districts. As night falls, the Muslim Quarter comes alive with a vibrant energy, offering a sensory explosion of spicy aromas, hand-pulled Biang Biang noodles, and local street snacks that reflect the city's diverse and ancient trading history." },
            { id: 12, country: "China", name: "CHENGDu", subtitle: "The Panda & Food Capital", price: 890, image: "https://images.unsplash.com/photo-1723242015936-ab12ca2626b3?q=80&w=1200", description: "Chengdu is the ultimate destination for those looking to experience China’s \"slow life\" famous for its laid-back teahouses and its most beloved residents: the Giant Pandas. Visiting the Panda Research Base in the early morning offers a rare chance to see these animals at their most active in a lush, green setting. However, the city is just as famous for its bold, numbing Sichuan Hotpot and its status as a UNESCO City of Gastronomy. Between spicy meals, you can find locals playing Mahjong in People's Park or explore the trendy, design-forward boutiques of Taikoo Li, making Chengdu a perfect blend of traditional folk culture and modern, youthful energy." }
        ];

        // --- AUTH LOGIC ---
        function checkSession() {
            const activeUser = localStorage.getItem("activeDragonUser");
            if (activeUser) {
                currentUser = JSON.parse(activeUser);
                isLoggedIn = true;
                updateUIForLoggedInUser();
            }
        }

        function handleSignup() {
            const name = document.getElementById('signup-name').value.trim();
            const email = document.getElementById('signup-email').value.trim();
            const password = document.getElementById('signup-password').value;

            if (!name || !email || !password) {
                showToast("All fields are required.");
                return;
            }

            const userDB = JSON.parse(localStorage.getItem("orangeDragonDB") || "[]");
            if (userDB.some(u => u.email.toLowerCase() === email.toLowerCase())) {
                showToast("Email already registered.");
                return;
            }

            const newUser = { name, email, password };
            userDB.push(newUser);
            localStorage.setItem("orangeDragonDB", JSON.stringify(userDB));

            loginUser({ name, email });
        }

        function handleLogin() {
            const email = document.getElementById('login-email').value.trim();
            const password = document.getElementById('login-password').value;

            if (!email || !password) {
                showToast("Enter email and password.");
                return;
            }

            const userDB = JSON.parse(localStorage.getItem("orangeDragonDB") || "[]");
            const user = userDB.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);

            if (user) {
                loginUser({ name: user.name, email: user.email });
            } else {
                showToast("Invalid credentials.");
            }
        }

        function loginUser(userData) {
            currentUser = userData;
            isLoggedIn = true;
            localStorage.setItem("activeDragonUser", JSON.stringify(userData));
            updateUIForLoggedInUser();
            showToast(`Welcome, ${userData.name}`);
        }

        function updateUIForLoggedInUser() {
            document.getElementById('nav-user-img').src = "https://images.steamusercontent.com/ugc/12550951272907868323/FBA1789F1D766A857574F177BEDFAB16AF127B29/?w=100&q=80";
            document.getElementById('user-name-display').textContent = currentUser.name;
            document.getElementById('user-email-display').textContent = currentUser.email;
            
            if (!document.getElementById('auth-modal').classList.contains('hidden')) {
                showView('profile-view');
            } else {
                closeAuthModal();
            }
        }

        function logout() {
            localStorage.removeItem("activeDragonUser");
            isLoggedIn = false;
            currentUser = null;
            document.getElementById('nav-user-img').src = "https://cdn-icons-png.flaticon.com/512/149/149071.png";
            showToast("Logged out successfully.");
            closeAuthModal();
        }

        // --- UI TOGGLES ---
        function handleProfileClick() {
            document.getElementById('auth-modal').classList.remove('hidden');
            document.body.style.overflow = 'hidden';
            showView(isLoggedIn ? 'profile-view' : 'login-form');
        }

        function switchAuth(type) {
            showView(type === 'login' ? 'login-form' : 'signup-form');
        }

        function showView(viewId) {
            ['login-form', 'signup-form', 'profile-view'].forEach(id => {
                document.getElementById(id).classList.add('hidden');
            });
            document.getElementById(viewId).classList.remove('hidden');
        }

        function closeAuthModal() {
            document.getElementById('auth-modal').classList.add('hidden');
            document.body.style.overflow = '';
        }

        function toggleSearch(isOpen) {
            const overlay = document.getElementById('search-overlay');
            if (isOpen) {
                overlay.classList.remove('opacity-0', 'pointer-events-none');
                overlay.classList.add('opacity-100', 'pointer-events-auto');
                document.getElementById('search-input').focus();
            } else {
                overlay.classList.remove('opacity-100', 'pointer-events-auto');
                overlay.classList.add('opacity-0', 'pointer-events-none');
            }
        }

        function fillSearch(term) {
            const input = document.getElementById('search-input');
            input.value = term;
            handleSearch({ target: input });
        }

        function handleSearch(e) {
            const query = e.target.value.toLowerCase().trim();
            const resultsDiv = document.getElementById('search-results');
            const initialDiv = document.getElementById('search-initial');

            if (!query) {
                resultsDiv.classList.add('hidden');
                initialDiv.classList.remove('hidden');
                return;
            }

            initialDiv.classList.add('hidden');
            const matches = DESTINATIONS.filter(d => d.name.toLowerCase().includes(query) || d.subtitle.toLowerCase().includes(query));

            if (matches.length > 0) {
                resultsDiv.classList.remove('hidden');
                resultsDiv.innerHTML = matches.map(d => `
                    <div class="flex items-center p-4 bg-zinc-900 rounded border border-transparent hover:border-orange-600 transition-all cursor-pointer" onclick="selectDestination(${d.id}); toggleSearch(false);">
                        <img src="${d.image}" class="w-12 h-12 object-cover rounded grayscale hover:grayscale-0">
                        <div class="ml-4">
                            <h4 class="font-brand font-bold text-white text-sm">${d.name}</h4>
                            <p class="text-[10px] text-gray-500 uppercase">${d.subtitle}</p>
                        </div>
                        <div class="ml-auto font-bold text-orange-600 text-sm">$${d.price}</div>
                    </div>
                `).join('');
            } else {
                resultsDiv.classList.remove('hidden');
                resultsDiv.innerHTML = `<p class="text-center text-gray-500 py-8 col-span-2 text-xs">No matching realms found.</p>`;
            }
        }

        // --- DESTINATIONS & CART ---
        function filterDestinations(country) {
            currentFilter = country;
            document.querySelectorAll('button[id^="btn-"]').forEach(btn => {
                btn.classList.remove('border-orange-600', 'bg-orange-900/20', 'text-orange-500');
                btn.classList.add('border-zinc-800', 'text-gray-500');
            });
            const activeBtn = document.getElementById(`btn-${country}`);
            activeBtn.classList.remove('border-zinc-800', 'text-gray-500');
            activeBtn.classList.add('border-orange-600', 'bg-orange-900/20', 'text-orange-500');
            renderGrid();
        }

        function renderGrid() {
            const grid = document.getElementById('destinations-grid');
            const filtered = DESTINATIONS.filter(d => d.country === currentFilter);
            grid.innerHTML = filtered.map(d => `
                <div class="group relative h-full rounded overflow-hidden cursor-pointer border-b-2 border-transparent hover:border-orange-600 transition-all fade-in-up" onclick="selectDestination(${d.id})">
                    <img src="${d.image}" class="absolute inset-0 w-full h-full object-cover card-zoom grayscale group-hover:grayscale-0 transition-all duration-700">
                    <div class="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                    <div class="absolute bottom-6 left-0 right-0 text-center">
                        <h3 class="font-brand text-xl font-bold tracking-widest text-white glow-orange uppercase">${d.name}</h3>
                        <p class="text-[10px] text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 uppercase">${d.subtitle}</p>
                    </div>
                </div>
            `).join('');
        }

        function selectDestination(id) {
            const d = DESTINATIONS.find(item => item.id === id);
            const titleEl = document.getElementById('desc-title');
            const contentEl = document.getElementById('desc-content');
            const btn = document.getElementById('desc-book-btn');

            titleEl.style.opacity = '0';
            contentEl.style.opacity = '0';

            setTimeout(() => {
                titleEl.innerHTML = `THE LEGEND <br> OF ${d.name}`;
                contentEl.textContent = d.description;
                titleEl.style.opacity = '1';
                contentEl.style.opacity = '1';
                btn.setAttribute('onclick', `addToCart(${d.id})`);
            }, 300);

            document.getElementById('description-section').scrollIntoView({ behavior: 'smooth' });
        }

        function toggleCart(isOpen) {
            const panel = document.getElementById('cart-panel');
            const backdrop = document.getElementById('cart-backdrop');
            const drawer = document.getElementById('cart-drawer');

            if (isOpen) {
                drawer.classList.remove('pointer-events-none');
                backdrop.classList.add('opacity-100');
                panel.classList.remove('translate-x-full');
            } else {
                drawer.classList.add('pointer-events-none');
                backdrop.classList.remove('opacity-100');
                panel.classList.add('translate-x-full');
            }
        }

        function addToCart(id) {
            const item = DESTINATIONS.find(d => d.id === id);
            const existing = cart.find(c => c.id === id);
            if (existing) {
                existing.qty++;
            } else {
                cart.push({ ...item, qty: 1 });
            }
            updateCartUI();
            toggleCart(true);
            showToast(`${item.name} ticket added.`);
        }

        function removeFromCart(id) {
            cart = cart.filter(c => c.id !== id);
            updateCartUI();
        }

        function updateCartUI() {
            const container = document.getElementById('cart-items-container');
            const navBadge = document.getElementById('cart-badge-nav');
            const totalEl = document.getElementById('total-price');
            const footer = document.getElementById('cart-footer');
            const countHeader = document.getElementById('cart-count-header');

            const totalQty = cart.reduce((acc, curr) => acc + curr.qty, 0);
            const totalAmt = cart.reduce((acc, curr) => acc + (curr.price * curr.qty), 0);

            countHeader.textContent = totalQty;
            if (totalQty > 0) {
                navBadge.textContent = totalQty;
                navBadge.classList.remove('hidden');
            } else {
                navBadge.classList.add('hidden');
            }

            if (cart.length === 0) {
                container.innerHTML = `<div class="h-full flex flex-col items-center justify-center text-zinc-600 text-xs tracking-widest gap-4"><i data-lucide="ticket" class="w-12 h-12 opacity-20"></i>EMPTY VAULT</div>`;
                footer.classList.add('hidden');
            } else {
                container.innerHTML = cart.map(item => `
                    <div class="flex items-center gap-4 py-4 border-b border-zinc-900">
                        <img src="${item.image}" class="w-16 h-16 object-cover rounded border border-zinc-800">
                        <div class="flex-1">
                            <h4 class="font-brand font-bold text-white text-sm tracking-widest">${item.name}</h4>
                            <p class="text-[10px] text-gray-500">QTY: ${item.qty} x $${item.price}</p>
                        </div>
                        <button onclick="removeFromCart(${item.id})" class="text-zinc-600 hover:text-red-500 transition-colors">
                            <i data-lucide="trash-2" class="w-4 h-4"></i>
                        </button>
                    </div>
                `).join('');
                footer.classList.remove('hidden');
                totalEl.textContent = `$${totalAmt}`;
            }
            lucide.createIcons();
        }

        function showToast(msg) {
            const container = document.getElementById('toast-container');
            const toast = document.createElement('div');
            toast.className = 'bg-zinc-900 border-l-4 border-orange-600 px-6 py-4 shadow-2xl slide-up flex items-center gap-4 text-white text-xs font-bold tracking-widest uppercase';
            toast.innerHTML = `<i data-lucide="info" class="w-4 h-4 text-orange-500"></i> ${msg}`;
            container.appendChild(toast);
            lucide.createIcons();
            setTimeout(() => {
                toast.style.opacity = '0';
                setTimeout(() => toast.remove(), 500);
            }, 3000);
        }
        
        // [NEW] MOBILE MENU LOGIC
        function toggleMobileMenu(isOpen) {
            const menu = document.getElementById('mobile-menu');
            if (isOpen) {
                menu.classList.remove('translate-x-full');
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            } else {
                menu.classList.add('translate-x-full');
                document.body.style.overflow = '';
            }
        }

        // --- INIT ---
        window.onload = () => {
            checkSession();
            renderGrid();
            updateCartUI();
            lucide.createIcons();
            document.getElementById('search-input').addEventListener('input', handleSearch);
        };

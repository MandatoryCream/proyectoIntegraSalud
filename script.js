document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. DATA DEFINITIONS (Realistic Mock Data)
    // ==========================================
    
    const professionals = [
        {
            id: 1,
            name: "Dra. María González",
            specialty: "Psicología Clínica Estudiantil",
            category: "psicologia",
            age: 34,
            gender: "Femenino",
            img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&q=80",
            bio: "Especialista en estrés académico, ansiedad ante exámenes y transiciones universitarias. Enfoque humanista.",
            rating: 4.9,
            reviews: 142,
            slots: ["09:00", "10:30", "12:00", "15:00", "16:30"]
        },
        {
            id: 2,
            name: "Dr. Carlos Ruiz",
            specialty: "Psiquiatría de Enlace",
            category: "psiquiatria",
            age: 48,
            gender: "Masculino",
            img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&h=300&fit=crop&q=80",
            bio: "Médico psiquiatra con enfoque integrativo en trastornos del ánimo y déficit atencional en jóvenes adultos.",
            rating: 4.8,
            reviews: 98,
            slots: ["08:30", "10:00", "11:30", "14:00"]
        },
        {
            id: 3,
            name: "Lic. Ana Martínez",
            specialty: "Psicología Cognitivo-Conductual",
            category: "psicologia",
            age: 29,
            gender: "Femenino",
            img: "https://images.unsplash.com/photo-1594824813573-246434de83fb?w=300&h=300&fit=crop&q=80",
            bio: "Terapeuta especializada en manejo de fobias sociales, autoestima y procrastinación académica.",
            rating: 4.9,
            reviews: 87,
            slots: ["11:00", "13:00", "15:30", "17:00", "18:00"]
        },
        {
            id: 4,
            name: "Dr. Luis Fernández",
            specialty: "Psiquiatría Juvenil y Enlace",
            category: "psiquiatria",
            age: 52,
            gender: "Masculino",
            img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=300&h=300&fit=crop&q=80",
            bio: "Diagnóstico y tratamiento de crisis emocionales severas, trastornos de sueño e higiene del sueño escolar.",
            rating: 4.7,
            reviews: 120,
            slots: ["10:00", "13:00", "16:00"]
        },
        {
            id: 5,
            name: "Coach Valeria Soto",
            specialty: "Nutrición Clínica y Deportiva",
            category: "nutricion",
            age: 27,
            gender: "Femenino",
            img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&q=80",
            bio: "Nutricionista experta en psiconutrición, alimentación intuitiva y rendimiento deportivo escolar.",
            rating: 4.9,
            reviews: 64,
            slots: ["09:00", "11:00", "15:00", "17:00"]
        },
        {
            id: 6,
            name: "Coach Miguel Herrera",
            specialty: "Entrenador Físico y Postura",
            category: "fisica",
            age: 38,
            gender: "Masculino",
            img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&q=80",
            bio: "Preparador físico orientado a compensar el sedentarismo escolar y ejercicios de fuerza funcional.",
            rating: 4.8,
            reviews: 75,
            slots: ["08:00", "10:30", "12:30", "16:00", "18:00"]
        },
        {
            id: 7,
            name: "Lic. Clara Benítez",
            specialty: "Nutrición y Relación Alimentaria",
            category: "nutricion",
            age: 41,
            gender: "Femenino",
            img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&q=80",
            bio: "Enfoque clínico en reeducación de hábitos dietarios en estudiantes sometidos a estrés académico.",
            rating: 4.9,
            reviews: 53,
            slots: ["10:00", "12:00", "14:30", "16:30"]
        },
        {
            id: 8,
            name: "Coach Ignacio Silva",
            specialty: "Pilates e Instructor de Movilidad",
            category: "fisica",
            age: 31,
            gender: "Masculino",
            img: "https://images.unsplash.com/photo-1607990283143-e81e7a2c93ab?w=300&h=300&fit=crop&q=80",
            bio: "Clases de movilidad, estiramientos posturales activos y control corporal para aliviar dolores de espalda.",
            rating: 4.7,
            reviews: 42,
            slots: ["09:30", "11:30", "14:00", "16:00"]
        }
    ];

    const articles = [
        {
            id: 1,
            title: "5 Técnicas de Higiene Mental para Estudiantes",
            tag: "Salud Mental",
            category: "mental",
            premium: false,
            readTime: "4 min",
            date: "24 Mayo, 2026",
            author: "Dra. María González",
            authorImg: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&q=80",
            excerpt: "El estrés académico puede abrumar. Aprende a crear espacios de desconexión y a ordenar tus descansos de forma saludable.",
            content: [
                "La vida universitaria trae consigo grandes desafíos intelectuales y emocionales. Para rendir de manera óptima, es vital cuidar nuestra salud mental mediante hábitos diarios sencillos.",
                "En primer lugar, establece límites claros de estudio. No estudies en la cama: tu cerebro necesita asociar el espacio de descanso con la desconexión total.",
                "En segundo lugar, aplica la técnica Pomodoro o descansos estructurados. Trabajar más de 90 minutos seguidos disminuye drásticamente la concentración y eleva el cortisol.",
                "Tercero, mantén contacto social no académico. Hablar con amigos de temas ajenos a la universidad ayuda a oxigenar la mente y relativizar los problemas.",
                "Recuerda que pedir ayuda profesional a tiempo no es debilidad, sino una muestra de autoconocimiento y responsabilidad sobre tu propio bienestar."
            ]
        },
        {
            id: 2,
            title: "Nutrición y Cerebro: Alimentos para Mejorar la Memoria",
            tag: "Salud Física",
            category: "fisica",
            premium: false,
            readTime: "6 min",
            date: "18 Mayo, 2026",
            author: "Coach Valeria Soto",
            authorImg: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&q=80",
            excerpt: "Descubre cómo lo que comes influye directamente en tu capacidad de concentración y retención de información.",
            content: [
                "Existe un eje directo de comunicación entre el intestino y el cerebro. Los nutrientes que ingerimos determinan la producción de neurotransmisores esenciales para la memoria.",
                "Los ácidos grasos Omega-3 (presentes en pescados azules, nueces y semillas de chía) son fundamentales para la estructura de las membranas neuronales.",
                "Los antioxidantes de los frutos rojos previenen el estrés oxidativo en el cerebro, mejorando la agilidad mental durante épocas de exámenes.",
                "Asimismo, la hidratación es clave: una deshidratación leve del 2% puede reducir tu rendimiento cognitivo y provocar dolores de cabeza recurrentes.",
                "Evita los azúcares refinados y el exceso de cafeína; aunque dan energía inmediata, provocan un posterior desplome de glucosa que arruina tu concentración."
            ]
        },
        {
            id: 3,
            title: "Psiconutrición: La Relación entre el Estrés y la Comida",
            tag: "Salud Mental",
            category: "mental",
            premium: true,
            readTime: "5 min",
            date: "12 Mayo, 2026",
            author: "Lic. Clara Benítez",
            authorImg: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&q=80",
            excerpt: "Análisis profundo de por qué buscamos comida reconfortante bajo presión y cómo romper el ciclo de la ansiedad.",
            content: [
                "El comer emocional ocurre cuando utilizamos los alimentos para adormecer o gestionar sentimientos difíciles como el estrés, la soledad o el aburrimiento.",
                "Bajo estrés crónico, el cuerpo libera cortisol, una hormona que incrementa el apetito, especialmente por carbohidratos simples y grasas que activan el sistema de recompensa cerebral.",
                "Para romper este ciclo, primero practica la pausa consciente. Pregúntate: '¿Tengo hambre física (estómago vacío, gradual) o emocional (antojo repentino, específico)?'",
                "Busca alternativas de regulación emocional: un baño tibio, caminar 10 minutos, o llamar a alguien cercano. No uses la comida como único mecanismo de afrontamiento.",
                "Si sientes que el comer emocional interfiere de forma de vida diaria, consulta con nuestro equipo especializado en psiconutrición."
            ]
        },
        {
            id: 4,
            title: "Entrenamiento de Movilidad para el Sedentarismo Escolar",
            tag: "Salud Física",
            category: "fisica",
            premium: true,
            readTime: "7 min",
            date: "05 Mayo, 2026",
            author: "Coach Ignacio Silva",
            authorImg: "https://images.unsplash.com/photo-1607990283143-e81e7a2c93ab?w=100&h=100&fit=crop&q=80",
            excerpt: "Rutina corta de estiramientos y ejercicios de postura para aliviar los dolores de espalda por estar sentado.",
            content: [
                "Pasar más de 6 horas sentados frente al computador genera acortamiento del psoas ilíaco, rigidez en los hombros y debilidad en la zona lumbar.",
                "Una rutina básica de movilidad de 10 minutos diarios puede revertir la rigidez articular y activar la musculatura de soporte.",
                "El estiramiento del flexor de cadera (lunge bajo) alivia la tensión lumbar. Combínalo con la postura del gato-vaca para movilizar la columna.",
                "La rotación torácica ayuda a abrir el pecho y hombros, compensando la postura encorvada típica al escribir en el teclado.",
                "Programa pausas activas cada 50 minutos: ponte de pie, realiza círculos con los hombros y camina un poco. Tus articulaciones te lo agradecerán."
            ]
        }
    ];

    const videos = [
        {
            id: 1,
            title: "Guía de Respiración Diafragmática Corta",
            duration: "3:45",
            thumbnail: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=225&fit=crop&q=80",
            premium: false
        },
        {
            id: 2,
            title: "Posturas Clave para Estirar Cuello y Hombros",
            duration: "4:20",
            thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=225&fit=crop&q=80",
            premium: false
        },
        {
            id: 3,
            title: "Meditación Guiada para antes de un Examen",
            duration: "5:10",
            thumbnail: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=400&h=225&fit=crop&q=80",
            premium: true
        },
        {
            id: 4,
            title: "Rutina HIIT de 10 minutos sin equipamiento",
            duration: "10:15",
            thumbnail: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=400&h=225&fit=crop&q=80",
            premium: true
        }
    ];

    // ==========================================
    // 2. STATE MANAGEMENT (Login & Plan States)
    // ==========================================
    
    let userPlan = localStorage.getItem('userPlan'); // 'gratuito' or 'premium' or null
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));

    // Check if the URL has ?logged=true to simulate login success
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('logged') === 'true' && !currentUser) {
        currentUser = {
            name: "Estudiante U. Innovación",
            email: "estudiante@innovacion.cl",
            avatar: "https://i.pravatar.cc/150?img=33"
        };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
    }

    // Toggle dropdown user profile
    function initUserMenu() {
        const profileArea = document.getElementById('userProfileArea');
        if (currentUser) {
            const planText = userPlan === 'premium' ? 'Premium' : 'Gratuito';
            const planClass = userPlan === 'premium' ? 'premium' : 'gratuito';
            
            profileArea.innerHTML = `
                <div class="user-menu-container">
                    <div class="user-profile-badge" id="userMenuToggle">
                        <img src="${currentUser.avatar}" alt="Avatar" class="user-avatar">
                        <span class="user-name">${currentUser.name}</span>
                        <span class="plan-badge ${planClass}" id="navPlanBadge">${planText}</span>
                        <i class="fa-solid fa-chevron-down" style="font-size: 0.8rem; margin-left: 4px;"></i>
                    </div>
                    <div class="user-dropdown glass" id="userDropdown">
                        <div class="dropdown-header">
                            <p>Sesión iniciada como</p>
                            <h5>${currentUser.name}</h5>
                            <p style="font-size: 0.72rem; opacity: 0.8; margin-top: 2px;">${currentUser.email}</p>
                        </div>
                        <button class="dropdown-item" id="btnGoProfile"><i class="fa-solid fa-user"></i> Mi Perfil</button>
                        <button class="dropdown-item" id="btnNavChangePlan"><i class="fa-solid fa-gem" style="color: var(--accent-lavender);"></i> Cambiar de Plan</button>
                        <button class="dropdown-item danger" id="btnNavLogout"><i class="fa-solid fa-right-from-bracket"></i> Cerrar Sesión</button>
                    </div>
                </div>
            `;
            
            // Dropdown triggers
            const toggleBtn = document.getElementById('userMenuToggle');
            const dropdown = document.getElementById('userDropdown');
            
            toggleBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                dropdown.classList.toggle('show');
            });
            
            document.addEventListener('click', () => {
                dropdown.classList.remove('show');
            });
            
            document.getElementById('btnGoProfile').addEventListener('click', () => {
                alert(`Perfil de Estudiante: ${currentUser.name}\nCorreo: ${currentUser.email}\nHistorial de reservas: 0 citas activas.`);
            });
            
            document.getElementById('btnNavChangePlan').addEventListener('click', () => {
                openSubscriptionModal();
            });
            
            document.getElementById('btnNavLogout').addEventListener('click', () => {
                localStorage.removeItem('currentUser');
                // preserve userPlan if desired, or clear it
                window.location.href = 'index.html';
            });
        }
    }

    // ==========================================
    // 3. SUBSCRIPTION MODAL (Paywall Gating)
    // ==========================================
    
    const subscriptionModal = document.getElementById('subscriptionModal');
    const chooseFreePlanBtn = document.getElementById('chooseFreePlanBtn');
    const choosePremiumPlanBtn = document.getElementById('choosePremiumPlanBtn');

    function checkSubscription() {
        if (!userPlan) {
            openSubscriptionModal();
        } else {
            applyPlanSettings();
        }
    }

    function openSubscriptionModal() {
        subscriptionModal.classList.add('show');
    }

    function selectPlan(plan) {
        userPlan = plan;
        localStorage.setItem('userPlan', plan);
        subscriptionModal.classList.remove('show');
        applyPlanSettings();
        initUserMenu();
        
        // Show comforting toast/alert simulation
        const planMsg = plan === 'premium' ? 
            "¡Te has suscrito al Plan Premium ($24.000 CLP/mes)! Acceso completo activado." : 
            "Has seleccionado el Plan Gratuito. El acceso a profesionales y material premium está bloqueado.";
        alert(planMsg);
    }

    chooseFreePlanBtn.addEventListener('click', () => selectPlan('gratuito'));
    choosePremiumPlanBtn.addEventListener('click', () => selectPlan('premium'));

    function applyPlanSettings() {
        renderProfessionals();
        renderArticles();
        renderVideos();
        
        // Update nav badge if menu exists
        const navBadge = document.getElementById('navPlanBadge');
        if (navBadge) {
            navBadge.textContent = userPlan === 'premium' ? 'Premium' : 'Gratuito';
            navBadge.className = `plan-badge ${userPlan === 'premium' ? 'premium' : 'gratuito'}`;
        }
    }

    // ==========================================
    // 4. PROFESSIONAL LIST & FILTERS
    // ==========================================
    
    const professionalsContainer = document.getElementById('professionalsContainer');
    const searchNameInput = document.getElementById('searchName');
    const filterSpecialtySelect = document.getElementById('filterSpecialty');
    const filterGenderSelect = document.getElementById('filterGender');
    const filterAgeSelect = document.getElementById('filterAge');

    function renderProfessionals() {
        professionalsContainer.innerHTML = '';
        
        const nameQuery = searchNameInput.value.toLowerCase().trim();
        const specialtyQuery = filterSpecialtySelect.value;
        const genderQuery = filterGenderSelect.value;
        const ageQuery = filterAgeSelect.value;
        
        const filtered = professionals.filter(prof => {
            // Name match
            const matchesName = prof.name.toLowerCase().includes(nameQuery);
            // Specialty match
            const matchesSpecialty = specialtyQuery === 'todos' || prof.category === specialtyQuery;
            // Gender match
            const matchesGender = genderQuery === 'todos' || prof.gender === genderQuery;
            // Age range match
            let matchesAge = true;
            if (ageQuery === 'joven') matchesAge = prof.age >= 20 && prof.age <= 35;
            else if (ageQuery === 'medio') matchesAge = prof.age >= 36 && prof.age <= 50;
            else if (ageQuery === 'senior') matchesAge = prof.age >= 51;
            
            return matchesName && matchesSpecialty && matchesGender && matchesAge;
        });

        if (filtered.length === 0) {
            professionalsContainer.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 40px 20px; color: var(--primary-light);">
                    <i class="fa-solid fa-user-slash" style="font-size: 2.5rem; margin-bottom: 12px; opacity: 0.5;"></i>
                    <p>No se encontraron especialistas con los filtros seleccionados.</p>
                </div>
            `;
            return;
        }

        filtered.forEach(prof => {
            const card = document.createElement('div');
            card.classList.add('pro-card', 'glass');
            
            const isGated = userPlan === 'gratuito';
            const specLabel = prof.category === 'psicologia' || prof.category === 'psiquiatria' ? 'Salud Mental' : 'Salud Física';
            const badgeClass = prof.category === 'psicologia' || prof.category === 'psiquiatria' ? 'mental' : 'fisica';
            
            if (isGated) {
                card.classList.add('pro-card-locked', 'gated-locked');
            }

            card.innerHTML = `
                ${isGated ? `
                <div class="locked-overlay">
                    <div class="locked-icon-badge"><i class="fa-solid fa-lock"></i></div>
                    <h4>Agendamiento Bloqueado</h4>
                    <p>Requiere Plan Premium para agendar citas con especialistas</p>
                    <button class="btn btn-mint btn-unlock">Suscripción Premium</button>
                </div>
                ` : ''}
                <div class="pro-card-header">
                    <img src="${prof.img}" alt="${prof.name}" class="pro-card-img" loading="lazy">
                    <span class="pro-badge ${badgeClass}">${specLabel}</span>
                </div>
                <div class="pro-card-body">
                    <h3>${prof.name}</h3>
                    <p class="pro-specialty">${prof.specialty}</p>
                    <div class="pro-meta">
                        <span><i class="fa-solid fa-cake-candles"></i> ${prof.age} años</span>
                        <span><i class="fa-solid fa-venus-mars"></i> ${prof.gender}</span>
                    </div>
                    <p class="pro-bio">${prof.bio}</p>
                    <div class="pro-footer">
                        <div class="pro-rating">
                            <i class="fa-solid fa-star"></i> <span>${prof.rating}</span> <span style="font-weight:400; opacity: 0.6;">(${prof.reviews})</span>
                        </div>
                        <span class="pro-action-btn">Agendar <i class="fa-solid fa-arrow-right"></i></span>
                    </div>
                </div>
            `;

            if (isGated) {
                const unlockBtn = card.querySelector('.btn-unlock');
                unlockBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    openSubscriptionModal();
                });
            } else {
                card.addEventListener('click', () => openBookingModal(prof));
            }
            
            professionalsContainer.appendChild(card);
        });
    }

    // Event listeners for filters
    searchNameInput.addEventListener('input', renderProfessionals);
    filterSpecialtySelect.addEventListener('change', renderProfessionals);
    filterGenderSelect.addEventListener('change', renderProfessionals);
    filterAgeSelect.addEventListener('change', renderProfessionals);

    // ==========================================
    // 5. CALENDAR & SCHEDULER LOGIC
    // ==========================================
    
    const calendarDays = document.getElementById('calendarDays');
    const monthYearDisplay = document.getElementById('monthYear');
    const prevMonthBtn = document.getElementById('prevMonth');
    const nextMonthBtn = document.getElementById('nextMonth');

    let currentDate = new Date();
    let selectedDate = new Date(); // Tracks chosen calendar day

    function renderCalendar(date) {
        calendarDays.innerHTML = '';
        const year = date.getFullYear();
        const month = date.getMonth();
        
        const formatter = new Intl.DateTimeFormat('es-ES', { month: 'long', year: 'numeric' });
        let monthStr = formatter.format(date);
        monthYearDisplay.textContent = monthStr.charAt(0).toUpperCase() + monthStr.slice(1);

        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        // Empty spacer slots
        for (let i = 0; i < firstDayOfMonth; i++) {
            const emptyDiv = document.createElement('div');
            emptyDiv.classList.add('calendar-day', 'empty');
            calendarDays.appendChild(emptyDiv);
        }

        // Add days
        for (let i = 1; i <= daysInMonth; i++) {
            const dayDiv = document.createElement('div');
            dayDiv.classList.add('calendar-day');
            dayDiv.textContent = i;
            
            if (i === selectedDate.getDate() && month === selectedDate.getMonth() && year === selectedDate.getFullYear()) {
                dayDiv.classList.add('selected');
            }

            dayDiv.addEventListener('click', () => {
                document.querySelectorAll('.calendar-day.selected').forEach(el => el.classList.remove('selected'));
                dayDiv.classList.add('selected');
                selectedDate = new Date(year, month, i);
                
                // Alert if clicking in Plan Gratuito
                if (userPlan === 'gratuito') {
                    alert("Para reservar una cita en la fecha seleccionada, debes actualizar al Plan Premium.");
                    openSubscriptionModal();
                } else {
                    // Smooth scroll down to professionals to pick one
                    document.getElementById('profesionales').scrollIntoView({ behavior: 'smooth' });
                }
            });
            calendarDays.appendChild(dayDiv);
        }
    }

    prevMonthBtn.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate);
    });

    nextMonthBtn.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar(currentDate);
    });

    renderCalendar(currentDate);

    // Booking Modal controls
    const scheduleModal = document.getElementById('scheduleModal');
    const closeScheduleModal = document.getElementById('closeScheduleModal');
    const cancelScheduleBtn = document.getElementById('cancelScheduleBtn');
    const confirmScheduleBtn = document.getElementById('confirmScheduleBtn');
    const modalProfImg = document.getElementById('modalProfImg');
    const modalProfName = document.getElementById('modalProfName');
    const modalProfSpec = document.getElementById('modalProfSpec');
    const timeSlotsContainer = document.getElementById('timeSlotsContainer');

    let activeProfessional = null;
    let selectedTimeSlot = null;

    function openBookingModal(prof) {
        activeProfessional = prof;
        selectedTimeSlot = null;
        
        modalProfImg.src = prof.img;
        modalProfName.textContent = prof.name;
        modalProfSpec.textContent = prof.specialty;
        
        // Render slots
        timeSlotsContainer.innerHTML = '';
        prof.slots.forEach(time => {
            const slotBtn = document.createElement('button');
            slotBtn.classList.add('time-slot');
            slotBtn.textContent = time;
            
            slotBtn.addEventListener('click', () => {
                document.querySelectorAll('.time-slot.selected').forEach(el => el.classList.remove('selected'));
                slotBtn.classList.add('selected');
                selectedTimeSlot = time;
            });
            
            timeSlotsContainer.appendChild(slotBtn);
        });

        scheduleModal.classList.add('show');
    }

    function closeBookingModal() {
        scheduleModal.classList.remove('show');
        activeProfessional = null;
        selectedTimeSlot = null;
    }

    closeScheduleModal.addEventListener('click', closeBookingModal);
    cancelScheduleBtn.addEventListener('click', closeBookingModal);
    
    confirmScheduleBtn.addEventListener('click', () => {
        if (!selectedTimeSlot) {
            alert("Por favor, selecciona un horario para tu sesión.");
            return;
        }
        
        const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = selectedDate.toLocaleDateString('es-ES', dateOptions);
        
        alert(`¡Cita Reservada Exitosamente!\n\nEspecialista: ${activeProfessional.name}\nFecha: ${formattedDate}\nHorario: ${selectedTimeSlot} hrs.\n\nSe ha enviado un correo con el link de la sesión en Zoom.`);
        closeBookingModal();
    });

    window.addEventListener('click', (e) => {
        if (e.target === scheduleModal) closeBookingModal();
    });

    // ==========================================
    // 6. ARTICLES AND VIDEOS SECTIONS
    // ==========================================
    
    const articlesContainer = document.getElementById('articlesContainer');
    const articleReaderModal = document.getElementById('articleReaderModal');
    const closeArticleReader = document.getElementById('closeArticleReader');
    const readerTitle = document.getElementById('readerTitle');
    const readerMeta = document.getElementById('readerMeta');
    const readerHeroImg = document.getElementById('readerHeroImg');
    const readerContent = document.getElementById('readerContent');

    function renderArticles() {
        articlesContainer.innerHTML = '';
        
        articles.forEach(art => {
            const card = document.createElement('article');
            card.classList.add('article-card');
            
            const isGated = art.premium && userPlan === 'gratuito';
            const tagClass = art.category === 'mental' ? 'mental' : 'fisica';
            
            if (isGated) {
                card.classList.add('gated-locked');
            }

            card.innerHTML = `
                <div class="article-img-wrapper">
                    <img src="${art.thumbnail || 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=400&fit=crop&q=80'}" alt="${art.title}" class="article-img" loading="lazy">
                    <span class="article-tag ${tagClass}">${art.tag}</span>
                    ${isGated ? `
                    <div class="locked-overlay">
                        <div class="locked-icon-badge"><i class="fa-solid fa-lock"></i></div>
                        <h4>Artículo Premium</h4>
                        <p>Desbloquea con tu Suscripción Premium</p>
                        <button class="btn btn-mint btn-unlock" style="font-size:0.75rem; padding:6px 12px;">Saber más</button>
                    </div>
                    ` : ''}
                </div>
                <div class="article-body">
                    <div class="article-meta">
                        <span><i class="fa-solid fa-calendar"></i> ${art.date}</span>
                        <span><i class="fa-solid fa-clock"></i> ${art.readTime}</span>
                    </div>
                    <h3>${art.title}</h3>
                    <p class="article-excerpt">${art.excerpt}</p>
                    <div class="article-footer">
                        <div class="article-author">
                            <img src="${art.authorImg}" alt="${art.author}" class="article-author-img">
                            <span>${art.author}</span>
                        </div>
                        ${isGated ? 
                            `<span class="article-link" style="opacity:0.5; cursor:pointer;"><i class="fa-solid fa-lock"></i> Premium</span>` :
                            `<span class="article-link" style="cursor:pointer;">Leer Más <i class="fa-solid fa-arrow-right"></i></span>`
                        }
                    </div>
                </div>
            `;

            if (isGated) {
                const triggerSub = () => openSubscriptionModal();
                card.querySelector('.btn-unlock').addEventListener('click', (e) => {
                    e.stopPropagation();
                    triggerSub();
                });
                card.addEventListener('click', triggerSub);
            } else {
                card.addEventListener('click', () => openArticleReader(art));
            }

            articlesContainer.appendChild(card);
        });
    }

    function openArticleReader(art) {
        readerTitle.textContent = art.title;
        readerMeta.textContent = `Por ${art.author} | Publicado el ${art.date} | Lectura: ${art.readTime}`;
        readerHeroImg.src = art.thumbnail || 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=800&fit=crop&q=80';
        
        readerContent.innerHTML = art.content.map(para => `<p>${para}</p>`).join('');
        articleReaderModal.classList.add('show');
    }

    closeArticleReader.addEventListener('click', () => articleReaderModal.classList.remove('show'));
    
    // Videos Rendering & Logic
    const videosContainer = document.getElementById('videosContainer');
    const videoPlayerModal = document.getElementById('videoPlayerModal');
    const closeVideoPlayer = document.getElementById('closeVideoPlayer');
    const playerVideoTitle = document.getElementById('playerVideoTitle');
    const simPlayPauseBtn = document.getElementById('simPlayPauseBtn');
    const controlsPlayIcon = document.getElementById('controlsPlayIcon');
    const videoProgressFill = document.getElementById('videoProgressFill');

    let videoPlaying = false;

    function renderVideos() {
        videosContainer.innerHTML = '';
        
        videos.forEach(vid => {
            const card = document.createElement('div');
            card.classList.add('video-card');
            
            const isGated = vid.premium && userPlan === 'gratuito';
            
            if (isGated) {
                card.classList.add('gated-locked');
            }

            card.innerHTML = `
                <div class="video-thumbnail-wrapper">
                    <img src="${vid.thumbnail}" alt="${vid.title}" class="video-thumbnail" loading="lazy">
                    <span class="video-duration">${vid.duration}</span>
                    <div class="video-play-btn">
                        <i class="fa-solid fa-play"></i>
                    </div>
                    ${isGated ? `
                    <div class="locked-overlay">
                        <div class="locked-icon-badge"><i class="fa-solid fa-lock"></i></div>
                        <h4>Video Premium</h4>
                        <p>Desbloquea con tu Suscripción Premium</p>
                        <button class="btn btn-mint btn-unlock" style="font-size:0.75rem; padding:6px 12px;">Saber más</button>
                    </div>
                    ` : ''}
                </div>
                <div class="video-body">
                    <h4>${vid.title}</h4>
                </div>
            `;

            if (isGated) {
                const triggerSub = () => openSubscriptionModal();
                card.querySelector('.btn-unlock').addEventListener('click', (e) => {
                    e.stopPropagation();
                    triggerSub();
                });
                card.addEventListener('click', triggerSub);
            } else {
                card.addEventListener('click', () => openVideoPlayer(vid));
            }

            videosContainer.appendChild(card);
        });
    }

    function openVideoPlayer(vid) {
        playerVideoTitle.textContent = vid.title;
        videoPlayerModal.classList.add('show');
        
        // Reset progress animation
        videoPlaying = true;
        simPlayPauseBtn.className = "fa-solid fa-circle-pause";
        controlsPlayIcon.className = "fa-solid fa-pause";
        videoProgressFill.style.animationPlayState = 'running';
    }

    function togglePlayPauseVideo() {
        if (videoPlaying) {
            videoPlaying = false;
            simPlayPauseBtn.className = "fa-solid fa-circle-play";
            controlsPlayIcon.className = "fa-solid fa-play";
            videoProgressFill.style.animationPlayState = 'paused';
        } else {
            videoPlaying = true;
            simPlayPauseBtn.className = "fa-solid fa-circle-pause";
            controlsPlayIcon.className = "fa-solid fa-pause";
            videoProgressFill.style.animationPlayState = 'running';
        }
    }

    simPlayPauseBtn.addEventListener('click', togglePlayPauseVideo);
    controlsPlayIcon.addEventListener('click', togglePlayPauseVideo);

    closeVideoPlayer.addEventListener('click', () => {
        videoPlayerModal.classList.remove('show');
        videoPlaying = false;
        videoProgressFill.style.animationPlayState = 'paused';
    });

    window.addEventListener('click', (e) => {
        if (e.target === articleReaderModal) articleReaderModal.classList.remove('show');
        if (e.target === videoPlayerModal) {
            videoPlayerModal.classList.remove('show');
            videoPlaying = false;
        }
    });

    // ==========================================
    // 7. CHATBOT GENERAL LOGIC
    // ==========================================
    
    const chatToggle = document.getElementById('chatToggle');
    const chatWindow = document.getElementById('chatWindow');
    const closeChat = document.getElementById('closeChat');
    const chatInput = document.getElementById('chatInput');
    const sendMsgBtn = document.getElementById('sendMsg');
    const chatBody = document.getElementById('chatBody');

    function toggleChat() {
        chatWindow.classList.toggle('hidden');
        if (!chatWindow.classList.contains('hidden')) {
            chatInput.focus();
            
            // Hide welcome bubble when opening chat
            document.getElementById('guideWelcomeBubble').classList.add('hidden');
        }
    }

    chatToggle.addEventListener('click', toggleChat);
    closeChat.addEventListener('click', () => chatWindow.classList.add('hidden'));

    function appendMessage(text, sender) {
        const msgDiv = document.createElement('div');
        msgDiv.classList.add('message', sender === 'user' ? 'user-message' : 'bot-message');
        
        // Basic Markdown replacement for **bold**
        const formattedText = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        msgDiv.innerHTML = formattedText;
        
        chatBody.appendChild(msgDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    function handleSend() {
        const text = chatInput.value.trim();
        if (text) {
            appendMessage(text, 'user');
            chatInput.value = '';
            
            // Simulating typing response placeholder for user engagement
            setTimeout(() => {
                appendMessage("Gracias por compartir eso. He guardado tu anotación. Te recuerdo que puedes agendar con nuestros profesionales o presionar el botón **SOS** si estás sufriendo de ansiedad intensa.", "bot");
            }, 1000);
        }
    }

    sendMsgBtn.addEventListener('click', handleSend);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSend();
    });

    // ==========================================
    // 8. CHATBOT EMERGENCY SOS SYSTEM (5 options)
    // ==========================================
    
    const chatSosBtn = document.getElementById('chatSosBtn');
    const sosOverlay = document.getElementById('sosOverlay');
    const closeSosOverlay = document.getElementById('closeSosOverlay');
    const groundingNextBtn = document.getElementById('groundingNextBtn');
    
    chatSosBtn.addEventListener('click', () => {
        sosOverlay.classList.add('show');
    });

    closeSosOverlay.addEventListener('click', () => {
        sosOverlay.classList.remove('show');
        resetAllSosPanels();
    });

    function resetAllSosPanels() {
        // Hide all detail subpanels
        document.querySelectorAll('.sos-detail-panel').forEach(panel => {
            panel.classList.remove('show');
        });
        
        // Reset Breathing Exercise
        clearInterval(breathInterval);
        const circle = document.getElementById('breathCircle');
        circle.style.transform = 'scale(1)';
        circle.textContent = 'Comenzar';
        document.getElementById('breathStatus').textContent = 'Presiona iniciar e inhala por la nariz.';
        breathRunning = false;
        
        // Reset Grounding Steps
        activeGroundingStep = 5;
        document.querySelectorAll('.grounding-step-box').forEach(box => {
            box.classList.remove('active');
        });
        document.getElementById('groundingStep-5').classList.add('active');
        groundingNextBtn.textContent = "Siguiente Paso";
        
        // Reset Contacts Form
        document.getElementById('sosAlertForm').style.display = 'flex';
        document.getElementById('alertSuccessIndicator').style.display = 'none';
        document.getElementById('sosAlertForm').reset();
        
        // Reset Dialing Status
        document.getElementById('dialStatus').textContent = '';
        
        // Reset Crisis Chat
        const simBody = document.getElementById('crisisChatSimBody');
        simBody.innerHTML = `
            <div class="message bot-message" style="align-self: flex-start;">
                Hola, soy el orientador virtual de crisis. Estoy aquí para acompañarte en este momento de alta tensión. Cuéntame, ¿cómo te sientes físicamente en este instante?
            </div>
        `;
        document.getElementById('crisisChatOptionsContainer').innerHTML = `
            <button class="crisis-chat-btn" onclick="sendCrisisMessage('Siento mucha presión en el pecho', 'chest')">Siento mucha presión en el pecho</button>
            <button class="crisis-chat-btn" onclick="sendCrisisMessage('Tengo ganas de llorar o gritar', 'crying')">Tengo ganas de llorar o gritar</button>
            <button class="crisis-chat-btn" onclick="sendCrisisMessage('Me siento abrumado y asustado', 'scared')">Me siento abrumado y asustado</button>
        `;
    }

    // Expose SOS methods globally for onclick actions in HTML
    window.openSosDetail = function(type) {
        document.getElementById(`sosDetail-${type}`).classList.add('show');
    };

    window.backToSosOptions = function() {
        resetAllSosPanels();
    };

    // SOS Mechanics 1: Calling crisis lines
    window.simulateCall = function(number) {
        const dialStatus = document.getElementById('dialStatus');
        dialStatus.textContent = `Llamando al ${number}...`;
        dialStatus.style.color = 'var(--accent-mint)';
        
        setTimeout(() => {
            dialStatus.textContent = `Conectando con un orientador en ${number}...`;
            setTimeout(() => {
                dialStatus.textContent = `¡Llamada simulada establecida con éxito con ${number}!`;
                dialStatus.style.color = 'var(--accent-mint)';
            }, 1500);
        }, 1200);
    };

    // SOS Mechanics 2: Breathing 4-7-8
    const startBreathBtn = document.getElementById('startBreathBtn');
    let breathRunning = false;
    let breathInterval = null;

    startBreathBtn.addEventListener('click', () => {
        if (breathRunning) {
            clearInterval(breathInterval);
            const circle = document.getElementById('breathCircle');
            circle.style.transform = 'scale(1)';
            circle.textContent = 'Comenzar';
            document.getElementById('breathStatus').textContent = 'Presiona iniciar e inhala por la nariz.';
            startBreathBtn.textContent = 'Iniciar Ejercicio';
            breathRunning = false;
        } else {
            breathRunning = true;
            startBreathBtn.textContent = 'Detener';
            runBreathingCycle();
        }
    });

    function runBreathingCycle() {
        const circle = document.getElementById('breathCircle');
        const status = document.getElementById('breathStatus');
        
        const runCycle = () => {
            // Step 1: Inhale 4s
            circle.style.transition = 'transform 4s linear';
            circle.style.transform = 'scale(1.5)';
            circle.textContent = 'Inhala';
            status.textContent = 'Inhala lenta y profundamente por la nariz durante 4 segundos...';
            
            setTimeout(() => {
                if (!breathRunning) return;
                // Step 2: Hold 7s
                circle.style.transition = 'none';
                circle.textContent = 'Mantén';
                status.textContent = 'Mantén el aire en tus pulmones por 7 segundos...';
                
                setTimeout(() => {
                    if (!breathRunning) return;
                    // Step 3: Exhale 8s
                    circle.style.transition = 'transform 8s linear';
                    circle.style.transform = 'scale(1)';
                    circle.textContent = 'Exhala';
                    status.textContent = 'Suelta el aire por la boca lentamente haciendo un suspiro por 8 segundos...';
                }, 7000);
                
            }, 4000);
        };
        
        runCycle();
        breathInterval = setInterval(runCycle, 19000); // 4 + 7 + 8 = 19 seconds per cycle
    }

    // SOS Mechanics 3: Grounding 5-4-3-2-1 steps
    let activeGroundingStep = 5;
    
    groundingNextBtn.addEventListener('click', () => {
        if (activeGroundingStep > 1) {
            document.getElementById(`groundingStep-${activeGroundingStep}`).classList.remove('active');
            activeGroundingStep--;
            document.getElementById(`groundingStep-${activeGroundingStep}`).classList.add('active');
            
            if (activeGroundingStep === 1) {
                groundingNextBtn.textContent = "Finalizar Ejercicio";
            }
        } else {
            // Finished
            alert("Has completado el ejercicio. Tu pulso debería estar descendiendo. Respira profundo.");
            backToSosOptions();
        }
    });

    // SOS Mechanics 4: Send trusted contact alert
    window.sendEmergencyAlert = function(event) {
        event.preventDefault();
        
        const contactName = document.getElementById('sosContactName').value;
        const contactPhone = document.getElementById('sosContactPhone').value;
        
        document.getElementById('sosAlertForm').style.display = 'none';
        
        const successIndicator = document.getElementById('alertSuccessIndicator');
        const successMsg = document.getElementById('alertSuccessMsg');
        
        successMsg.textContent = `Se ha simulado el envío de un SMS urgente a ${contactName} (${contactPhone}): "Hola, estoy experimentando una crisis de ansiedad y estoy usando IntegraSalud. Por favor, llámame."`;
        successIndicator.style.display = 'flex';
    };

    // SOS Mechanics 5: Crisis Chat tree
    window.sendCrisisMessage = function(text, type) {
        const simBody = document.getElementById('crisisChatSimBody');
        const optsContainer = document.getElementById('crisisChatOptionsContainer');
        
        // Append user response
        const userMsg = document.createElement('div');
        userMsg.classList.add('message', 'user-message');
        userMsg.textContent = text;
        simBody.appendChild(userMsg);
        simBody.scrollTop = simBody.scrollHeight;
        
        optsContainer.innerHTML = `<span style="font-size:0.8rem; color:var(--primary-light);"><i class="fa-solid fa-circle-notch fa-spin"></i> Escribiendo...</span>`;
        
        // Simulated response delay
        setTimeout(() => {
            optsContainer.innerHTML = '';
            
            const botMsg = document.createElement('div');
            botMsg.classList.add('message', 'bot-message');
            
            if (type === 'chest') {
                botMsg.textContent = "La presión en el pecho es una reacción refleja por el exceso de oxígeno en una respiración rápida. Bajemos el ritmo. ¿Te parece si vamos al módulo de Respiración 4-7-8?";
                optsContainer.innerHTML = `
                    <button class="crisis-chat-btn" onclick="goToFeature('breathing')">Sí, abrir respiración</button>
                    <button class="crisis-chat-btn" onclick="sendCrisisMessage('Prefiero otra opción', 'another')">No, prefiero otra opción</button>
                `;
            } else if (type === 'crying') {
                botMsg.textContent = "Llorar o gritar libera endorfinas y reduce la tensión arterial. Es saludable. Deja fluir esa emoción. Cuando sientas que estás listo, ¿te gustaría conectar con las líneas de ayuda oficiales?";
                optsContainer.innerHTML = `
                    <button class="crisis-chat-btn" onclick="goToFeature('numbers')">Sí, ver números telefónicos</button>
                    <button class="crisis-chat-btn" onclick="sendCrisisMessage('Prefiero distraer mi mente', 'distract')">Prefiero distraer mi mente</button>
                `;
            } else if (type === 'scared' || type === 'distract') {
                botMsg.textContent = "Para salir del bucle del miedo en tu cabeza, es muy útil anclarte en tus sentidos físicos. ¿Iniciamos el ejercicio de enraizamiento de 5 pasos?";
                optsContainer.innerHTML = `
                    <button class="crisis-chat-btn" onclick="goToFeature('grounding')">Sí, iniciar enraizamiento</button>
                    <button class="crisis-chat-btn" onclick="sendCrisisMessage('No, prefiero un consejo verbal', 'quote')">No, prefiero un consejo verbal</button>
                `;
            } else if (type === 'quote') {
                botMsg.innerHTML = "Un pensamiento valioso: **'Esto que sientes ahora es intenso, pero es una oleada pasajera. No durará para siempre. Estás a salvo en tu habitación.'** Quédate quieto unos segundos y respira despacio.";
                optsContainer.innerHTML = `
                    <button class="crisis-chat-btn" onclick="backToSosOptions()">Volver al menú de emergencia</button>
                `;
            } else {
                botMsg.textContent = "Entendido. A veces estar presente y acompañado es lo mejor. Prueba cualquiera de las otras herramientas en el menú principal.";
                optsContainer.innerHTML = `
                    <button class="crisis-chat-btn" onclick="backToSosOptions()">Volver al menú principal SOS</button>
                `;
            }
            
            simBody.appendChild(botMsg);
            simBody.scrollTop = simBody.scrollHeight;
        }, 1200);
    };

    window.goToFeature = function(feature) {
        resetAllSosPanels();
        openSosDetail(feature);
    };

    // ==========================================
    // 9. ONBOARDING TOUR (Floating guide)
    // ==========================================
    
    const guideWelcomeBubble = document.getElementById('guideWelcomeBubble');
    const startTourBtn = document.getElementById('startTourBtn');
    const skipTourBtn = document.getElementById('skipTourBtn');
    const tourBackdrop = document.getElementById('tourBackdrop');
    
    let tourActive = false;
    let currentTourStep = 0;
    let tourTooltip = null;

    function initOnboarding() {
        const tourCompleted = localStorage.getItem('tourCompleted');
        if (!tourCompleted) {
            setTimeout(() => {
                guideWelcomeBubble.classList.remove('hidden');
            }, 2000);
        }
    }

    skipTourBtn.addEventListener('click', () => {
        guideWelcomeBubble.classList.add('hidden');
        localStorage.setItem('tourCompleted', 'true');
    });

    startTourBtn.addEventListener('click', () => {
        guideWelcomeBubble.classList.add('hidden');
        startInteractiveTour();
    });

    const tourSteps = [
        {
            elementId: 'userProfileArea',
            title: "Acceso Estudiantil 👤",
            desc: "Inicia sesión con tu correo universitario para agendar citas, guardar artículos favoritos y registrar tu historial.",
            position: 'bottom'
        },
        {
            elementId: 'filterPanel',
            title: "Buscador de Especialistas 🔍",
            desc: "Filtra profesionales y coaches físicos por especialidad, rango de edad, género o busca directamente por su nombre.",
            position: 'bottom'
        },
        {
            elementId: 'calendarSection',
            title: "Disponibilidad Horaria 📅",
            desc: "Haz clic en cualquier día de este calendario interactivo para cargar las horas y programar tu sesión.",
            position: 'top'
        },
        {
            elementId: 'articulos',
            title: "Artículos Educativos 📚",
            desc: "Lecturas y herramientas sobre higiene del sueño, psiconutrición y manejo del estrés redactadas por nuestro equipo.",
            position: 'top'
        },
        {
            elementId: 'chatToggle',
            title: "Asistente Virtual y SOS 🆘",
            desc: "Consulta dudas con el Asistente Inteligente o abre el botón **SOS** para acceder a guías críticas contra crisis de pánico.",
            position: 'left'
        }
    ];

    function startInteractiveTour() {
        tourActive = true;
        currentTourStep = 0;
        tourBackdrop.style.display = 'block';
        
        // Open chatbot to ensure the chat button and SOS button are visible if needed, 
        // though we just highlight the floating toggle.
        showTourStep(0);
    }

    function showTourStep(index) {
        // Clean previous highlight
        document.querySelectorAll('.tour-highlight').forEach(el => {
            el.classList.remove('tour-highlight');
        });
        if (tourTooltip) {
            tourTooltip.remove();
            tourTooltip = null;
        }

        if (index >= tourSteps.length) {
            endTour();
            return;
        }

        currentTourStep = index;
        const stepData = tourSteps[index];
        const element = document.getElementById(stepData.elementId);

        if (!element) {
            // If element is not in DOM for some reason, skip to next
            showTourStep(index + 1);
            return;
        }

        // Highlight element
        element.classList.add('tour-highlight');
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // Wait short delay for smooth scroll to finish before tooltip positioning
        setTimeout(() => {
            if (!tourActive) return;
            
            // Create tooltip
            tourTooltip = document.createElement('div');
            tourTooltip.classList.add('tour-tooltip');
            tourTooltip.innerHTML = `
                <h4><span>${index + 1} de ${tourSteps.length}</span> ${stepData.title}</h4>
                <p>${stepData.desc}</p>
                <div class="tour-tooltip-actions">
                    <button class="tour-btn-link" onclick="exitTour()">Saltar tour</button>
                    <div class="tour-nav-btns">
                        ${index > 0 ? `<button class="btn btn-outline" style="padding: 5px 10px; font-size:0.75rem;" onclick="prevTourStep()">Atrás</button>` : ''}
                        <button class="btn btn-mint" style="padding: 5px 12px; font-size:0.75rem;" onclick="nextTourStep()">
                            ${index === tourSteps.length - 1 ? 'Finalizar' : 'Siguiente'}
                        </button>
                    </div>
                </div>
            `;

            document.body.appendChild(tourTooltip);
            positionTooltip(element, tourTooltip, stepData.position);
        }, 500);
    }

    window.nextTourStep = function() {
        showTourStep(currentTourStep + 1);
    };

    window.prevTourStep = function() {
        showTourStep(currentTourStep - 1);
    };

    window.exitTour = function() {
        endTour();
    };

    function endTour() {
        tourActive = false;
        tourBackdrop.style.display = 'none';
        document.querySelectorAll('.tour-highlight').forEach(el => {
            el.classList.remove('tour-highlight');
        });
        if (tourTooltip) {
            tourTooltip.remove();
            tourTooltip = null;
        }
        localStorage.setItem('tourCompleted', 'true');
        alert("¡Tour finalizado! Ya estás listo para explorar IntegraSalud.");
    }

    function positionTooltip(element, tooltip, preferredPosition) {
        const rect = element.getBoundingClientRect();
        const tooltipRect = tooltip.getBoundingClientRect();
        
        let top = 0;
        let left = 0;

        if (preferredPosition === 'bottom') {
            top = rect.bottom + window.scrollY + 12;
            left = rect.left + window.scrollX + (rect.width / 2) - (tooltipRect.width / 2);
        } else if (preferredPosition === 'left') {
            top = rect.top + window.scrollY + (rect.height / 2) - (tooltipRect.height / 2);
            left = rect.left + window.scrollX - tooltipRect.width - 12;
        } else { // top position
            top = rect.top + window.scrollY - tooltipRect.height - 12;
            left = rect.left + window.scrollX + (rect.width / 2) - (tooltipRect.width / 2);
        }

        // Horizontal boundaries check
        if (left < 12) left = 12;
        if (left + tooltipRect.width > window.innerWidth - 12) {
            left = window.innerWidth - tooltipRect.width - 12;
        }

        // Vertical boundaries check
        if (top < window.scrollY + 12) {
            top = rect.bottom + window.scrollY + 12; // flip to bottom if off-top
        }

        tooltip.style.top = `${top}px`;
        tooltip.style.left = `${left}px`;
    }

    // Reposition tooltip on window resize if active
    window.addEventListener('resize', () => {
        if (tourActive && tourTooltip) {
            const element = document.getElementById(tourSteps[currentTourStep].elementId);
            if (element) {
                positionTooltip(element, tourTooltip, tourSteps[currentTourStep].position);
            }
        }
    });

    // ==========================================
    // 10. INITIALIZATION
    // ==========================================
    
    initUserMenu();
    checkSubscription();
    initOnboarding();
});

$(document).ready(function() {
    gsap.set(['header', '.main-nav', '.news', '.feature-section'], { 
        autoAlpha: 0, 
        y: 50 
    });
    
    gsap.to('header', { 
        duration: 1, 
        autoAlpha: 1, 
        y: 0, 
        ease: "power2.out" 
    });
    
    gsap.to('.main-nav', { 
        duration: 1, 
        autoAlpha: 1, 
        y: 0, 
        delay: 0.2, 
        ease: "power2.out" 
    });
    
    gsap.to('.news', { 
        duration: 1, 
        autoAlpha: 1, 
        y: 0, 
        delay: 0.4, 
        ease: "power2.out" 
    });
    
    gsap.to('.feature-section', { 
        duration: 1, 
        autoAlpha: 1, 
        y: 0, 
        delay: 0.6, 
        ease: "power2.out" 
    });

    gsap.registerPlugin(ScrollTrigger);
    
    gsap.set('.faculty .feature-card', { autoAlpha: 0, y: 100 });
    gsap.to('.faculty .feature-card', {
        scrollTrigger: {
            trigger: '.faculty',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
    });

    gsap.set('.student-development .feature-card', { autoAlpha: 0, x: -100 });
    gsap.to('.student-development .feature-card', {
        scrollTrigger: {
            trigger: '.student-development',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        autoAlpha: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
    });

    gsap.set('.school-features .feature-card', { autoAlpha: 0, x: 100 });
    gsap.to('.school-features .feature-card', {
        scrollTrigger: {
            trigger: '.school-features',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        autoAlpha: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
    });

    gsap.set('.campus-gallery .gallery-item', { autoAlpha: 0, scale: 0.8 });
    gsap.to('.campus-gallery .gallery-item', {
        scrollTrigger: {
            trigger: '.campus-section',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        autoAlpha: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)"
    });

    gsap.set('footer', { autoAlpha: 0, y: 50 });
    gsap.to('footer', {
        scrollTrigger: {
            trigger: 'footer',
            start: 'top 90%',
            toggleActions: 'play none none reverse'
        },
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
    });

    $('.nav-link, .news-link').click(function(e) {
        e.preventDefault();
        const modalType = $(this).data('modal');
        if (modalType) {
            showModal(modalType);
        }
    });
    $('.close-btn').click(function() {
        hideModal();
    });
    $('.modal-container').click(function(e) {
        if ($(e.target).hasClass('modal-container')) {
            hideModal();
        }
    });
    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            hideModal();
        }
    });
    function showModal(type) {
        gsap.to('.modal-container', { 
            duration: 0.3, 
            autoAlpha: 1, 
            display: 'flex' 
        });
        gsap.to(`#${type}-modal`, { 
            duration: 0.3, 
            autoAlpha: 1, 
            display: 'block' 
        });
        $('body').addClass('modal-open');
    }
    function hideModal() {
        gsap.to('.modal-container', { 
            duration: 0.3, 
            autoAlpha: 0,
            display: 'none' 
        });
        gsap.to('.modal', { 
            duration: 0.3, 
            autoAlpha: 0,
            display: 'none' 
        });
        $('body').removeClass('modal-open');
    }
    $('.nav-link').hover(
        function() {
            gsap.to($(this), { 
                duration: 0.3, 
                scale: 1.05, 
                color: '#e74c3c',
                ease: "power2.out" 
            });
        },
        function() {
            gsap.to($(this), { 
                duration: 0.3, 
                scale: 1, 
                color: '',
                ease: "power2.out" 
            });
        }
    );

    $('.news-link').hover(
        function() {
            gsap.to($(this), { 
                duration: 0.3, 
                x: 10, 
                color: '#e74c3c',
                ease: "power2.out" 
            });
        },
        function() {
            gsap.to($(this), { 
                duration: 0.3, 
                x: 0, 
                color: '',
                ease: "power2.out" 
            });
        }
    );

    $('.gallery-item').hover(
        function() {
            gsap.to($(this).find('img'), { 
                duration: 0.4, 
                scale: 1.1, 
                rotation: 2,
                ease: "power2.out" 
            });
        },
        function() {
            gsap.to($(this).find('img'), { 
                duration: 0.4, 
                scale: 1, 
                rotation: 0,
                ease: "power2.out" 
            });
        }
    );

    $('.feature-card').hover(
        function() {
            gsap.to($(this), { 
                duration: 0.3, 
                y: -10, 
                boxShadow: '0 15px 30px rgba(0,0,0,0.2)',
                ease: "power2.out" 
            });
        },
        function() {
            gsap.to($(this), { 
                duration: 0.3, 
                y: 0, 
                boxShadow: '',
                ease: "power2.out" 
            });
        }
    );

    $('.btn').hover(
        function() {
            gsap.to($(this), { 
                duration: 0.3, 
                scale: 1.05, 
                ease: "power2.out" 
            });
        },
        function() {
            gsap.to($(this), { 
                duration: 0.3, 
                scale: 1, 
                ease: "power2.out" 
            });
        }
    );

    $('.tab').hover(
        function() {
            if (!$(this).hasClass('active')) {
                gsap.to($(this), { 
                    duration: 0.3, 
                    scale: 1.05, 
                    ease: "power2.out" 
                });
            }
        },
        function() {
            if (!$(this).hasClass('active')) {
                gsap.to($(this), { 
                    duration: 0.3, 
                    scale: 1, 
                    ease: "power2.out" 
                });
            }
        }
    );

    $('.tab').click(function() {
        const $this = $(this);
        const tabType = $this.index();
        
        $('.tab').removeClass('active');
        $this.addClass('active');
        
        gsap.to('.tab', { 
            duration: 0.2, 
            scale: 1, 
            ease: "power2.out" 
        });
        gsap.to($this, { 
            duration: 0.2, 
            scale: 1.05, 
            ease: "power2.out" 
        });

        if (tabType === 0) {
            gsap.to('.news-list', { 
                duration: 0.5, 
                autoAlpha: 1, 
                display: 'block',
                ease: "power2.out" 
            });
        } else {
            gsap.to('.news-list', { 
                duration: 0.5, 
                autoAlpha: 0, 
                display: 'none',
                ease: "power2.out" 
            });
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {

    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeBtn = document.getElementById('closeBtn');

    const tabs = document.querySelectorAll('.mobile_menu .left_tabs li');
    const contents = document.querySelectorAll('.mobile_menu .right_content .menu_content');

    const resetTabs = () => {
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => {
            c.classList.remove('active');
            c.hidden = true;
        });
    };

    const showContentByTabName = (tabName) => {
        let contentId = '';
        switch (tabName) {
            case '영화': contentId = 'tab_movie'; break;
            case '공연/전시/프로그램': contentId = 'tab_intro'; break;
            case '예매': contentId = 'tab_reservation'; break;
            case '예술관': contentId = 'tab_artspace'; break;
            case '아카데미': contentId = 'tab_academy'; break;
            default: return;
        };

        const contentEl = document.getElementById(contentId);
        if (contentEl) {
            contentEl.classList.add('active');
            contentEl.hidden = false;
        };
    };

    tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
            resetTabs();
            tab.classList.add('active');
            const tabName = tab.textContent.trim();
            showContentByTabName(tabName);
        });
    });

    if (tabs.length > 0) {
        tabs[0].click();
    }; // mobile_menu_tab


    // hamburger_btn
    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', function () {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    // close
    if (closeBtn) {
        closeBtn.addEventListener('click', function () {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    const fixedBtns = document.querySelector('.fixed_buttons');
    const topBtn = document.querySelector('.btn_scroll_top');
    const ticketBtn = document.querySelector('.btn_book_ticket');

    window.addEventListener('scroll', () => {
        if (fixedBtns) {
            fixedBtns.classList.toggle('show', window.scrollY > 200);
        };
    });

    if (topBtn) {
        topBtn.addEventListener('click', function (e) {
            e.preventDefault();
            if (typeof jQuery !== 'undefined') {
                jQuery.scrollTo(0, 500);
            } else {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    };

    if (ticketBtn) {
        ticketBtn.addEventListener('click', () => {
            window.location.href = '#!';
        });
    }; // fixed_buttons
});
document.addEventListener('DOMContentLoaded', function () {

    const hamBtn = document.getElementById('hamburgerBtn');
    const mobileHeader = document.getElementById('mobileHeader');
    const mobileMenu = document.getElementById('mobileMenu');

    if (hamBtn) {
        hamBtn.addEventListener('click', function () {
            const isOpen = mobileMenu.classList.toggle('active');
            mobileHeader.classList.toggle('open', isOpen);
        });

        document.addEventListener('click', function (e) {
            const clickedOutsideMenu = !mobileMenu.contains(e.target);
            const clickedOutsideButton = !hamBtn.contains(e.target);
            const menuIsOpen = mobileMenu.classList.contains('active');

            if (menuIsOpen && clickedOutsideMenu && clickedOutsideButton) {
                mobileMenu.classList.remove('active');
                mobileHeader.classList.remove('open');
            };
        });
    }; // hamburgerBtn



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
            case '영화':
                contentId = 'tab_movie';
                break;
            case '공연/전시/프로그램':
                contentId = 'tab_intro';
                break;
            case '예매':
                contentId = 'tab_reservation';
                break;
            case '예술관':
                contentId = 'tab_artspace';
                break;
            case '아카데미':
                contentId = 'tab_academy';
                break;
            default:
                return;
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



    const gnbouter = document.querySelector('.gnbouter');
    const dropdownMenu = document.querySelector('.dropdown_container');

    if (gnbouter && dropdownMenu) {
        let timer;

        function showDropdown() {
            clearTimeout(timer);
            dropdownMenu.style.opacity = '1';
            dropdownMenu.style.visibility = 'visible';
            dropdownMenu.style.transform = 'translateY(0)';
        };

        function hideDropdown() {
            timer = setTimeout(function () {
                dropdownMenu.style.opacity = '0';
                dropdownMenu.style.visibility = 'hidden';
                dropdownMenu.style.transform = 'translateY(0)';
            }, 200);
        };

        gnbouter.addEventListener('mouseenter', showDropdown);
        gnbouter.addEventListener('mouseleave', hideDropdown);
        dropdownMenu.addEventListener('mouseenter', showDropdown);
        dropdownMenu.addEventListener('mouseleave', hideDropdown);
    }; // dropdown_container



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
            $.scrollTo(0, 500);
        });
    };

    if (ticketBtn) {
        ticketBtn.addEventListener('click', () => {
            window.location.href = '#!';
        });
    }; // fixed_buttons

});

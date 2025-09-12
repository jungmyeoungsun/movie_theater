document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true
        },
    }); // swiper


    const tabItems = document.querySelectorAll('.best_screen_tab li');
    const listGroups = document.querySelectorAll('.best_screen .best_list');
    const slideButtons = document.querySelectorAll('.best_screen .slide_btn');

    let currentList = null;

    function showList(tabName) {
        listGroups.forEach(function (list) {
            list.classList.remove('active');
        });

        const targetId = 'bestList' + tabName.charAt(0).toUpperCase() + tabName.slice(1);
        const targetList = document.getElementById(targetId);
        if (targetList) {
            targetList.classList.add('active');
            currentList = targetList;
        }
    }

    if (tabItems.length > 0) {
        tabItems.forEach(function (tab) {
            tab.addEventListener('click', function () {
                tabItems.forEach(function (item) {
                    item.classList.remove('active');
                });

                tab.classList.add('active');

                const tabType = tab.dataset.tab;
                showList(tabType);
            });
        });

        tabItems[0].classList.add('active');
        showList(tabItems[0].dataset.tab);
    }; // best_screen_tab


    if (slideButtons.length > 0) {
        function slideList(direction) {
            if (!currentList) return;

            const item = currentList.querySelector('.bestscreen_list');
            if (item) {
                const itemWidth = item.offsetWidth + 10;
                currentList.scrollBy({
                    left: direction * itemWidth,
                    behavior: 'smooth'
                });
            }
        }

        slideButtons.forEach(function (btn) {
            if (btn.classList.contains('prev')) {
                btn.addEventListener('click', function () {
                    slideList(-1);
                });
            } else if (btn.classList.contains('next')) {
                btn.addEventListener('click', function () {
                    slideList(1);
                });
            }
        });
    }; // slide_btn


    // const scheduleSections = document.querySelectorAll('.schedule');

    // scheduleSections.forEach(function (section) {
    //     const tabButtons = section.querySelectorAll('.tab_btn');
    //     const contents = section.querySelectorAll('.category_content');

    //     tabButtons.forEach(function (tab) {
    //         tab.addEventListener('click', function () {
    //             const category = tab.dataset.category;

    //             tabButtons.forEach(function (btn) {
    //                 btn.classList.remove('active');
    //             });

    //             tab.classList.add('active');

    //             contents.forEach(function (content) {
    //                 if (content.dataset.category === category) {
    //                     content.classList.add('active');
    //                 } else {
    //                     content.classList.remove('active');
    //                 }
    //             });
    //         });
    //     }); // schedule_category_tab
    // });

});



function formatDateYYYYMMDD(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
}

const today = new Date(2025, 7, 4);

const scheduleData = {
    '2025-08-04': {
        movie: [
            { time: '14:00', title: 'F1 더무비', location: '상영관', href: '#!' },
            { time: '19:30', title: '드래곤 길들이기', location: '상영관', href: '#!' },
            { time: '19:30', title: '톰크루즈 미션 임파서블', location: '소극장', href: '#!' },
            { time: '19:30', title: '바람계곡의 나우시카', location: '중극장', href: '#!' },
            { time: '19:30', title: '엘리오', location: '대극장', href: '#!' }
        ],
        exhibition: [
            { time: '2025.05.05', title: "상상공작소 '매직월드'", location: '다목적홀(전시실)', href: '#!' },
            { time: '2025.02.14', title: '제 4회 부산 국제어린이청소년아트페어 인 루브르', location: '다목적홀(전시실)', href: '#!' },
            { time: '2025.10.18', title: '이영란의 감성체험 가루나무모래흙', location: '다목적홀(전시실)', href: '#!' }
        ],
        performance: [
            { time: '19:30', title: '2025 김경호 전국 투어 콘서트', location: '하늘연극장', href: '#!' },
            { time: '20:00', title: '2025 야외콘서트 7월: 사랑을 품은 영화음악 콘서트', location: '야외극장', href: '#!' }
        ]
    }
}; // scheduleData


let selectedDate = formatDateYYYYMMDD(today); // selectedDate
let selectedCategoryPc = 'movie';
let selectedCategoryMobile = 'movie';

function renderScheduleList(dateKey, category, containerRoot) {
    const categoryContainer = containerRoot.querySelector(`.category_content[data-category="${category}"]`);
    if (!categoryContainer) return;
    categoryContainer.innerHTML = '';

    const dayData = scheduleData[dateKey];
    if (!dayData || !dayData[category] || dayData[category].length === 0) {
        categoryContainer.innerHTML = `<div class="no_items">해당 날짜에 일정이 없습니다.</div>`;
        return;
    }

    dayData[category].forEach(item => {
        const a = document.createElement('a');
        a.href = item.href;

        const itemDiv = document.createElement('div');
        itemDiv.className = 'schedule_item';

        const timeDiv = document.createElement('div');
        timeDiv.className = 'schedule_time';
        timeDiv.textContent = item.time;

        const detailsDiv = document.createElement('div');
        detailsDiv.className = 'schedule_details';

        const titleDiv = document.createElement('div');
        titleDiv.className = 'schedule_title';
        titleDiv.textContent = item.title;

        const locationDiv = document.createElement('div');
        locationDiv.className = 'schedule_location';
        locationDiv.textContent = item.location;

        detailsDiv.appendChild(titleDiv);
        detailsDiv.appendChild(locationDiv);
        itemDiv.appendChild(timeDiv);
        itemDiv.appendChild(detailsDiv);
        a.appendChild(itemDiv);
        categoryContainer.appendChild(a);
    });
} // renderScheduleList


function setupCategoryTabs() {
    document.querySelectorAll('.pc_schedule .category_tabs .tab_btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const category = btn.dataset.category;
            if (!category) return;
            document.querySelectorAll('.pc_schedule .category_tabs .tab_btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedCategoryPc = category;

            document.querySelectorAll('.pc_list .category_content').forEach(cc => cc.classList.remove('active'));
            const target = document.querySelector(`.pc_list .category_content[data-category="${category}"]`);
            if (target) target.classList.add('active');

            renderScheduleList(selectedDate, category, document.querySelector('.pc_schedule'));
        });
    });

    document.querySelectorAll('.mobile_schedule .category_tabs .tab_btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const category = btn.dataset.category;
            if (!category) return;
            document.querySelectorAll('.mobile_schedule .category_tabs .tab_btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedCategoryMobile = category;

            document.querySelectorAll('.mobile_list .category_content').forEach(cc => cc.classList.remove('active'));
            const target = document.querySelector(`.mobile_list .category_content[data-category="${category}"]`);
            if (target) target.classList.add('active');

            renderScheduleList(selectedDate, category, document.querySelector('.mobile_schedule'));
        });
    });
}; // category_tabs_click


function setupCalendarSelection() {
    const currentMonthSpan = document.querySelector('.current_month_pc');
    function refreshMonthDisplay(date) {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        currentMonthSpan.textContent = `${year}년 ${month}월`;
    } // current_month_pc


    document.querySelectorAll('.pc_schedule .date > div').forEach(dayCell => {
        dayCell.addEventListener('click', () => {
            const dayText = dayCell.textContent.trim();
            if (!dayText || isNaN(dayText)) return;

            document.querySelectorAll('.pc_schedule .date > div').forEach(d => d.classList.remove('selected_day'));
            dayCell.classList.add('selected_day');

            const clickedDate = new Date(2025, 7, parseInt(dayText, 10)); // 8월
            selectedDate = formatDateYYYYMMDD(clickedDate);

            renderScheduleList(selectedDate, selectedCategoryPc, document.querySelector('.pc_schedule'));
        });
    }); // .pc_schedule_click


    document.querySelector('.prev_month')?.addEventListener('click', () => {
        refreshMonthDisplay(new Date(2025, 6, 1));
    });
    document.querySelector('.next_month')?.addEventListener('click', () => {
        refreshMonthDisplay(new Date(2025, 8, 1));
    }); // prev_month, next_month

    document.querySelectorAll('.pc_schedule .date > div').forEach(dayCell => {
        if (dayCell.textContent.trim() === String(today.getDate())) {
            dayCell.classList.add('selected_day');
        }
    }); // pc_schedule_selected_day

    refreshMonthDisplay(today);
}


document.addEventListener('DOMContentLoaded', () => {
    setupCategoryTabs();
    setupCalendarSelection();

    renderScheduleList(selectedDate, selectedCategoryPc, document.querySelector('.pc_schedule'));
    renderScheduleList(selectedDate, selectedCategoryMobile, document.querySelector('.mobile_schedule'));


    document.querySelectorAll('.mobile_schedule .category_tabs .tab_btn').forEach(b => {
        if (b.dataset.category === selectedCategoryMobile) b.classList.add('active');
        else b.classList.remove('active');
    });
    document.querySelectorAll('.mobile_list .category_content').forEach(cc => {
        if (cc.dataset.category === selectedCategoryMobile) cc.classList.add('active');
        else cc.classList.remove('active');
    });
}); // schedule_active

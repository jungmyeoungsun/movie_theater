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
    let itemsPerSlide = 4;
    let itemGap = 10;

    function showList(tabName) {
        listGroups.forEach(function (list) {
            list.classList.remove('active');
        });

        const targetId = 'bestList' + tabName.charAt(0).toUpperCase() + tabName.slice(1);
        const targetList = document.getElementById(targetId);
        if (targetList) {
            targetList.classList.add('active');
            currentList = targetList;
            currentList.scrollLeft = 0;
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
        function getItemsPerSlide() {
            if (window.innerWidth >= 1024) {
                return 5;
            } else if (window.innerWidth >= 768) {
                return 5;
            } else {
                return 4;
            }
        }

        function slideList(direction) {
            if (!currentList) return;

            itemsPerSlide = getItemsPerSlide();

            const item = currentList.querySelector('.bestscreen_list');
            if (item) {
                const itemFullWidth = item.offsetWidth + itemGap; // item + gap
                currentList.scrollBy({
                    left: direction * (itemFullWidth * itemsPerSlide),
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

});


// schedule
const serverCurrentTime = new Date('2025-12-17T15:18:37');

function formatDateYYYYMMDD(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
}

const scheduleData = {
    // 12월
    '2025-12-01': {
        movie: [{ time: '10:00', title: '이터널스', location: '상영관', href: '#!' }],
        exhibition: [{ time: '12.01-12.05', title: '미디어아트 특별전', location: '전시실', href: '#!' }],
        performance: []
    },
    '2025-12-02': {
        exhibition: [{ time: '12.01-12.05', title: '미디어아트 특별전', location: '전시실', href: '#!' }],
    },
    '2025-12-03': {
        exhibition: [{ time: '12.01-12.05', title: '미디어아트 특별전', location: '전시실', href: '#!' }],
    },
    '2025-12-04': {
        exhibition: [{ time: '12.01-12.05', title: '미디어아트 특별전', location: '전시실', href: '#!' }],
    },
    '2025-12-05': {
        exhibition: [{ time: '12.01-12.05', title: '미디어아트 특별전', location: '전시실', href: '#!' }],
    },
    '2025-12-10': {
        movie: [{ time: '14:30', title: '겨울왕국 2', location: '상영관', href: '#!' }],
    },
    '2025-12-16': {
        movie: [
            { time: '10:00', title: '크리스마스 스캔들', location: '상영관', href: '#!' },
            { time: '13:00', title: '스파이더맨: 노 웨이 홈', location: '상영관', href: '#!' }
        ],
        exhibition: [
            { time: '12.16-12.27', title: '크리스마스 일러스트전', location: '갤러리', href: '#!' }
        ],
        performance: [
            { time: '19:30', title: '크리스마스 오케스트라', location: '하늘연극장', href: '#!' }
        ]
    },
    '2025-12-17': {
        movie: [
            { time: '16:00', title: '분노의 질주: 더 얼티메이트', location: '대극장', href: '#!' },
            { time: '19:30', title: '겨울 왕국', location: '소극장', href: '#!' },
            { time: '22:30', title: 'F1 더 무비', location: '상영관', href: '#!' }
        ],
        exhibition: [
            { time: '12.16-12.27', title: '크리스마스 일러스트전', location: '갤러리', href: '#!' }
        ],
        performance: [
            { time: '19:30', title: '크리스마스 오케스트라', location: '하늘연극장', href: '#!' }
        ]
    },
    '2025-12-18': {
        movie: [
            { time: '11:00', title: '나 홀로 집에', location: '상영관', href: '#!' }, 
            { time: '19:30', title: '겨울 왕국', location: '소극장', href: '#!' }
        ],
        exhibition: [
            { time: '12.08-12.18', title: '미디어아트 특별전', location: '전시실', href: '#!' },
            { time: '12.16-12.27', title: '크리스마스 일러스트전', location: '갤러리', href: '#!' }
        ],
        performance: [
            { time: '19:30', title: '크리스마스 오케스트라', location: '하늘연극장', href: '#!' },
            { time: '18:00', title: '크리스마스 갈라 콘서트', location: '야외극장', href: '#!' }
        ]
    },
    '2025-12-19': {
     exhibition: [
            { time: '12.16-12.27', title: '크리스마스 일러스트전', location: '갤러리', href: '#!' }
        ]},
        '2025-12-20': {
     exhibition: [
            { time: '12.16-12.27', title: '크리스마스 일러스트전', location: '갤러리', href: '#!' }
        ]},
        '2025-12-21': {
     exhibition: [
            { time: '12.16-12.27', title: '크리스마스 일러스트전', location: '갤러리', href: '#!' }
        ]},
        '2025-12-22': {
     exhibition: [
            { time: '12.16-12.27', title: '크리스마스 일러스트전', location: '갤러리', href: '#!' }
        ]},
        '2025-12-23': {
     exhibition: [
            { time: '12.16-12.27', title: '크리스마스 일러스트전', location: '갤러리', href: '#!' }
        ]},
        '2025-12-24': {
            movie: [{ time: '16:00', title: '나 홀로 집에', location: '상영관', href: '#!' },{ time: '16:00', title: '러브 액츄얼리', location: '상영관', href: '#!' }],
     exhibition: [
            { time: '12.16-12.27', title: '크리스마스 일러스트전', location: '갤러리', href: '#!' },
            { time: '12.24-12.25', title: '크리스마스 미디어아트 특별전', location: '전시실', href: '#!' }
        ]},
    '2025-12-25': {
        movie: [{ time: '15:00', title: '나 홀로 집에', location: '상영관', href: '#!' }],
        exhibition: [{ time: '12.16-12.27', title: '크리스마스 일러스트전', location: '갤러리', href: '#!' },
            { time: '12.24-12.25', title: '크리스마스 미디어아트 특별전', location: '전시실', href: '#!' }],
        performance: [{ time: '19:00', title: '크리스마스 갈라 콘서트', location: '야외극장', href: '#!' }]
    },
    '2025-12-26': {
     exhibition: [
            { time: '12.16-12.27', title: '크리스마스 일러스트전', location: '갤러리', href: '#!' }
        ]},
        '2025-12-27': {
     exhibition: [
            { time: '12.16-12.27', title: '크리스마스 일러스트전', location: '갤러리', href: '#!' }
        ]},
    
    //1월
    '2026-01-01': {
        movie: [{ time: '10:00', title: '새해 시작', location: '상영관', href: '#!' }],
        exhibition: [],
        performance: []
    },
    // 11월
    '2025-11-01': {
        movie: [{ time: '10:00', title: 'F1 더 무비', location: '상영관', href: '#!' },{ time: '13:20', title: '엘리오', location: '상영관', href: '#!' },{ time: '15:10', title: '드래곤 길들이기', location: '상영관', href: '#!' }],
        exhibition: [{ time: '11.01-11.30', title: '가을 풍경화전', location: '전시실', href: '#!' }],
        performance: []
    }
};

let currentDisplayedDate = new Date(serverCurrentTime.getFullYear(), serverCurrentTime.getMonth(), serverCurrentTime.getDate()); // 현재 날짜
let currentMonth = new Date(serverCurrentTime.getFullYear(), serverCurrentTime.getMonth(), 1); // PC month(1일으로 설정)
let selectedCategoryPc = 'movie';
let selectedCategoryMobile = 'movie';




function formatFullDate(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    const days = ['일', '월', '화', '수', '목', '금', '토'];
    const dayOfWeek = days[date.getDay()];
    return `${y}.${m}.${d} (${dayOfWeek})`;
}

// schedule list
function renderScheduleList(dateObj, category, containerRoot) {
    const dateKey = formatDateYYYYMMDD(dateObj);
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

// mobile_schedule update
function updateMobileDateDisplay() {
    document.querySelector('.current_date_mobile').textContent = formatFullDate(currentDisplayedDate);
    renderScheduleList(currentDisplayedDate, selectedCategoryMobile, document.querySelector('.mobile_schedule'));
}

// PC
function renderCalendar() {
    const calendarGrid = document.querySelector('.pc_schedule .calendar_grid');
    if (!calendarGrid) return;
    calendarGrid.innerHTML = `
        <div class="day_name">일</div>
        <div class="day_name">월</div>
        <div class="day_name">화</div>
        <div class="day_name">수</div>
        <div class="day_name">목</div>
        <div class="day_name">금</div>
        <div class="day_name">토</div>
    `;

    const currentMonthPcSpan = document.querySelector('.current_month_pc');
    if (currentMonthPcSpan) {
        currentMonthPcSpan.textContent = `${currentMonth.getFullYear()}년 ${currentMonth.getMonth() + 1}월`;
    }

    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0); // 마지막달

    const startDayOfWeek = firstDay.getDay(); // 0(일) ~ 6(토)

    // 전 달
    for (let i = 0; i < startDayOfWeek; i++) {
        const emptyCell = document.createElement('div');
        emptyCell.classList.add('date_cell', 'empty');
        calendarGrid.appendChild(emptyCell);
    }

    for (let day = 1; day <= lastDay.getDate(); day++) {
        const dateCell = document.createElement('div');
        dateCell.classList.add('date_cell');
        dateCell.textContent = day;

        const fullDate = new Date(year, month, day);

        if (fullDate.toDateString() === serverCurrentTime.toDateString()) {
            dateCell.classList.add('current_day');
        }

        if (fullDate.toDateString() === currentDisplayedDate.toDateString()) {
            dateCell.classList.add('selected_day');
        }

        // click_event
        dateCell.addEventListener('click', () => {
            document.querySelectorAll('.pc_schedule .calendar_grid .date_cell').forEach(cell => cell.classList.remove('selected_day'));
            dateCell.classList.add('selected_day');
            currentDisplayedDate = new Date(fullDate.getFullYear(), fullDate.getMonth(), fullDate.getDate());
            renderScheduleList(currentDisplayedDate, selectedCategoryPc, document.querySelector('.pc_schedule'));
        });
        calendarGrid.appendChild(dateCell);
    }

    renderScheduleList(currentDisplayedDate, selectedCategoryPc, document.querySelector('.pc_schedule'));
}


document.addEventListener('DOMContentLoaded', () => {
    // category_tab
    const setupCategoryTabs = (scheduleRootSelector) => {
        document.querySelectorAll(`${scheduleRootSelector} .category_tabs .tab_btn`).forEach(btn => {
            btn.addEventListener('click', (e) => {
                const category = btn.dataset.category;
                if (!category) return;

                document.querySelectorAll(`${scheduleRootSelector} .category_tabs .tab_btn`).forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                if (scheduleRootSelector === '.pc_schedule') {
                    selectedCategoryPc = category;
                } else {
                    selectedCategoryMobile = category;
                }

                document.querySelectorAll(`${scheduleRootSelector} .schedule_list .category_content`).forEach(cc => cc.classList.remove('active'));
                const target = document.querySelector(`${scheduleRootSelector} .schedule_list .category_content[data-category="${category}"]`);
                if (target) target.classList.add('active');

                renderScheduleList(currentDisplayedDate, category, document.querySelector(scheduleRootSelector));
            });
        });
    };

    setupCategoryTabs('.pc_schedule');
    setupCategoryTabs('.mobile_schedule');


    // PC schedule_btn
    document.querySelector('.pc_schedule .prev_month')?.addEventListener('click', () => {
        currentMonth.setMonth(currentMonth.getMonth() - 1);
        currentDisplayedDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
        renderCalendar();
    });
    document.querySelector('.pc_schedule .next_month')?.addEventListener('click', () => {
        currentMonth.setMonth(currentMonth.getMonth() + 1);
        currentDisplayedDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
        renderCalendar();
    });

    // Mobile schedule_btn
    document.querySelector('.mobile_schedule .prev_day')?.addEventListener('click', () => {
        currentDisplayedDate.setDate(currentDisplayedDate.getDate() - 1);
        updateMobileDateDisplay();
    });
    document.querySelector('.mobile_schedule .next_day')?.addEventListener('click', () => {
        currentDisplayedDate.setDate(currentDisplayedDate.getDate() + 1);
        updateMobileDateDisplay();
    });


    renderCalendar(); //pc
    updateMobileDateDisplay(); // mobile

    document.querySelectorAll('.mobile_schedule .category_tabs .tab_btn').forEach(b => {
        if (b.dataset.category === selectedCategoryMobile) b.classList.add('active');
        else b.classList.remove('active');
    });
    document.querySelectorAll('.mobile_schedule .schedule_list .category_content').forEach(cc => {
        if (cc.dataset.category === selectedCategoryMobile) cc.classList.add('active');
        else cc.classList.remove('active');
    });
});

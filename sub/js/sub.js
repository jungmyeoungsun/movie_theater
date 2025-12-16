const criticItems = document.querySelectorAll('.critic_item');
const criticName = document.getElementById('critic_name');
const criticDesc = document.getElementById('critic_desc');


const criticsData = {
  critic_01: {
    name: '한국영화평론가협회 정지혜 평론가',
    desc: `동국대학교에서 극작과 영화이론을 전공. 前 대구대, 경남대에서 콘텐츠 시나리오 창작 강의. 속초국제장애인영화제 프로그래머. 르몽드, 텐아시아 등에 영화평론과 리뷰를 기고. 現 작가 에이전시 밀어 운영. 순천 KBS 라디오 시네마 톡톡 출연. CGV극장과 함께 개봉하는 독립/예술영화의 GV를 기획 진행 하고 있다.`
  },
  critic_02: {
    name: '윤필립 평론가',
    desc: `계명대에서 이성복 교수를 사사하고 연세대 국문과에서 석, 박사 학위를 받았다. 2012년 도미 후 에모리대를 거쳐
     대만 국립정치대, 싱가포르 난양공대에서 교수로 지내다 2019년 귀국 후 세종사이버대 한국어학과에 재직 중이다. 동아일보 신춘문예 영화평론으로 등단했으며, 제10회 서울국제사랑영화제에서 기독교 영화 비평 대상을 수상했다. 만화평론상, 서울국제프라이드영화제 등의 심사위원, 한국영화평론가협회 집행부를 역임했으며, 한국언어문화, 인문치료 등의 연구에 집중하고 있다. 공저로 ˹영화와 가족˼(2022), ˹영화와 권력˼(2023), ˹영화와 육체˼(2024 예정) 등이 있고, 현재 <경기일보>, <르몽드 디플로마티크>에 글을 싣고 있다.`
  },
  critic_03: {
    name: '이시현 평론가',
    desc: `서울대학교 학부에서 미학과 철학을 수학 중이다. 2022년 대학문학상, 2023년 영화의전당 영화평론대상을 수상해 평론가로 활동하게 되었다. 예술을 통한 공적 연대의 가능성에 대한 관심사를 바탕으로 예술의 윤리적, 사회적 역량에 주목하는 평론을 하고자 한다.`
  },
  critic_04: {
    name: '장지애 평론가',
    desc: `부산대학교 예술문화영상학과에서 박사과정을 수료하고, 동시대 영화에서 허구의 미학적 함의를 주제로 박사 논문을 준비 중이다. 2024년 영화의전당 영화평론대상을 수상했으며, 현재 영화비평과 연구를 병행하고 있다. 영화가 직조하는 서사의 결을 따라, 스크린을 넘어 확장되는 감각과 사유의 지평을 탐색하는 데 집중하고자 한다.`
  }
};


if (criticItems && criticName && criticDesc) {
  criticItems.forEach(item => {
    item.addEventListener('click', () => {
      criticItems.forEach(el => el.classList.remove('active'));
      item.classList.add('active');

      const id = item.getAttribute('data-id');
      const critic = criticsData[id];

      if (critic) {
        criticName.textContent = critic.name;
        criticDesc.textContent = critic.desc;
      }
    });
  });
} // critic_detail
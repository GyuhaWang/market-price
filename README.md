<h1>베트남의 시장 물가를 공유하는 웹 서비스</h1>
<p align="center">
<img width="45%" alt="image" src="https://github.com/user-attachments/assets/adaf38a6-daa0-433c-9478-db1df3e9c689">
<img width="45%" alt="image" src="https://github.com/user-attachments/assets/fd363a31-0d1a-4314-bc33-6b378bff3763">
<p/>
<br>
<a href="https://market-price-ochre.vercel.app/">웹사이트</a>
<br>
<h2>기획 의도</h2>
<ul>
  <li>베트남 여행중에 시장에서 흥정하는데 얼마에 사는 것이 적정 가격인지를 모르겠어요.</li>
  <li>여행을 가기전에 현지 물가를 알고 예산을 설정하고 싶어요</li>
</ul>
<br>
<h2>개발 일지</h2>
<ul>
  <h4>front-end</h4>
  <li>아주 간단하게 기획하고 간단한 화면을 만들어보자</li>
  <li>지역,카테고리 설정하면 해당 카테고리의 평균 가격과 구매 정보를 공유하자</li>
  <li>내가 구매한 가격 정보를 입력하자.</li>
   <h4>back-end</h4>
  <li>node.js, express, mongoDB를 사용해서 만들자</li>
  <li>product shema 구성</li>
  <li>create, get api 만들자.</li>
   <h4>배포</h4>
   front-end
  <li>vercel</li>
  back-end
  <li>aws ec2</li>
</ul>
<br>
<h2>시도중인 기술</h2>
<ul>
  <h4>react-hook-form</h4>
  <h5>why</h5>
  <li>유지보수에 좋다 : 일반 form을 구성하기 위해서 각 input 마다 useState로 만들어야 했던 부분을 useForm 하나로 바꿀 수 있다.</li>
  <li>control을 사용하여 UI변경에 쉽게 대응할 수 있다 : register를 사용하여 <input/> 을 사용할 수도 있지만 <Controller/>를 사용해 써드파티 컴포넌트에도 적용가능하다.</li>
  <h5>적용 <h5/> 
  <li>edit form을 react-hook-form을 사용해서 변경</li>
  <li>특히 controller를 사용해서 외부 UI Component를 사용할 수 있도록 만들었다.</li>
</ul>

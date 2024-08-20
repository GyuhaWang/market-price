<h1>베트남의 시장 물가를 공유하는 웹 서비스</h1>
<h2>현재 버전:2.0.0</h2>
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
  <h4>Server Side Rendering 변경</h4>
    <h5>why</h5>
    <li>기존 코드는 매번 페이지에서 API 호출을 하는 형태였다. 하지만 유저가 데이터를 볼 때 항상 최신 최신 데이터를 가져와서 보여주지 않아도 된다고 판단함 </li>
    <li> ssr로 변경하여 캐시된 데이터를 가져옴</li>
    <li>edit 또는 카테고리 등을 변경 하면 revalidate를 통해서 최신 데이터를 가져와서 보여주도록 변경함</li>
  <h4>좋아요 기능 추가 client side rendering</h4>
    <h5>why</h5>
     <li>좋아요를 누를 때 마다 전체 데이터를 가져와서 업데이트 할 필요가 없다고 판단 - 좋아요의 갯수가 실시간으로 연동될 필요는 없지 않을까?(다만 내가 누른 좋아요는 적용됨)</li>
     <li>기존 좋아요 갯수에 내가 현재 누른 좋아요를 더하는 것은 client side에서 처리함- 나중에 revalidate 하면 합산된 좋아요가 보일 수 있다.</li>
</ul>

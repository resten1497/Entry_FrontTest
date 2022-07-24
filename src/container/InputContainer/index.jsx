import "./InputContainer.css";
import NextBtn from "../../components/NextButton";

function InputContainer() {
  return (
    <>
      <div className="container">
        <form action="" className="form">
          <label>
            <p className="inputTitle">이름</p>
            <input
              type="text"
              name="visitorDivision"
              className="info"
              id="visitorDivision"
              placeholder="홍길동 "
              autoComplete="off"
            />
          </label>
          <label>
            <p className="inputTitle">전화번호</p>
            <input
              type="text"
              name="visitorPhoneNumber"
              className="info"
              id="visitorPhoneNumber"
              placeholder="010-8888-8888"
              autoComplete="off"
            />
          </label>
          <label>
            <p className="inputTitle">소속</p>
            <input
              type="text"
              name="visitorDivision"
              className="info"
              id="visitorDivision"
              placeholder="서울디지텍고등학교"
              autoComplete="off"
            />
          </label>
          <label>
            <p className="inputTitle">방문사유</p>
            <input
              type="text"
              name="visitorPhoneNumber"
              className="info"
              id="visitorPhoneNumber"
              placeholder="강의진행"
              autoComplete="off"
            />
          </label>
          <label>
            <p className="inputTitle">체온</p>
            <input
              type="text"
              name="temperature"
              className="info"
              id="temperature"
              placeholder="36.5"
              autoComplete="off"
            />
          </label>
          <label>
            <div className="privacyLabal">
              <input
                type="checkbox"
                name="checkBox"
                id="checkBox"
                className="checkBox"
              />
              <p className="privacy">개인정보수집에 동의합니다.</p>
            </div>
          </label>
          <NextBtn link={"/complete"} className="NextBtn" />
        </form>
      </div>
    </>
  );
}

export default InputContainer;

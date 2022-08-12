import React, { useEffect, useMemo, useState, useRef } from "react";
import QrReader from "react-qr-reader";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useMutation } from "@tanstack/react-query";
import sendCardData from "../../api/sendCardData";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CameraContainer = () => {
  const [cardId, setCardId] = useState(null);
  const navigate = useNavigate();
  const handleLinkOnClick = (cardId) => navigate("/regist", { state: cardId });
  let ref = useRef();
  const toastId = useRef(null);
  const notify = () =>
    (toastId.current = toast("인식중입니다.", {
      type: toast.loading,
      autoClose: 1000,
      delay: 100,
    }));
  const { mutate, isLoading, isError, error, isSuccess } = useMutation(
    sendCardData,
    {
      onSuccess: (data) => {
        toast.update(toastId.current, {
          render: "완료되었습니다.",
          type: toast.success,
          onClose: () => {
            handleLinkOnClick(cardId);
            ref.current.stopCamera();
          },
        });
      },
      onError: (error) => {
        toast.update(toastId.current, {
          render: "인증되지 않은 카드입니다.",
          type: toast.error,
          autoClose: 1000,
        });
      },
    }
  );

  useEffect(() => {
    if (cardId) {
      notify();
      mutate({ cardId: cardId });
      setCardId(null);
    }
  }, [cardId]);

  return (
    <>
      <Wrap>
        <QrReader
          ref={ref}
          delay={1000}
          facingMode={"user"}
          onScan={(result) => {
            if (result) {
              setCardId(result);
            }
          }}
          className="QrReader"
          onError={(err) => console.log(err)}
        />
        <Title>QR 코드를 화면에 보여주세요</Title>
        {/* {isLoading ? <WarinningText>요청중</WarinningText> : null}
        {isError ? <WarinningText>잘못된 QR코드입니다.</WarinningText> : null} */}
        <ToastContainer position="bottom-right" />
      </Wrap>
    </>
  );
};
const StyledParent = styled.div`
  & .your-class-name {
    border-color: red;
  }
`;
const Wrap = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  width: 40vw;
  height: 40vh;
  & .QrReader > section > div {
    display: none;
  }
`;

const Title = styled.p`
  font-size: 24px;
  margin-top: 50px;
  font-weight: 600;
  text-align: center;
`;
const WarinningText = styled.p`
  font-size: 24px;
  font-weight: 400;
  margin-top: 10px;
  color: red;
  text-align: center;
`;
export default CameraContainer;

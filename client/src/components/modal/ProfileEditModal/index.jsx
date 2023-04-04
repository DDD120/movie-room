import styled from "@emotion/styled";
import { colors, fontSize } from "styles/common";
import Modal from "../Modal";
import { IoMdReverseCamera } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { FiEdit3 } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSignoutMutation, useUpdateProfileMutation } from "apis/server-api";
import Button from "components/common/Button";
import SignoutMessage from "./SignoutMessage";
import { logout } from "store/user";
import { showToast } from "lib/toast";

const Base = styled.form`
  width: 80%;
  padding: 60px 24px;
  position: relative;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  gap: 60px;
  margin-bottom: 40px;
  flex-wrap: wrap;
`;

const Thumbnail = styled.div`
  position: relative;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  overflow: hidden;
  background-color: ${colors.grey};

  img {
    filter: brightness(0.5);
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  input {
    display: none;
  }

  label {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    color: ${colors.white};
    font-size: ${fontSize.xl};
    cursor: pointer;
  }
`;

const Info = styled.div`
  flex-grow: 1;
  text-align: left;
  font-size: ${fontSize.md};
`;

const InfoItem = styled.div`
  margin: 10px 0;
`;

const Name = styled.p`
  font-weight: 700;
  margin: 4px 0;
`;

const InputBox = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid ${colors.greyOpacity};
  padding: 10px;
  padding-right: 40px;
  background-color: ${colors.beige};
  font-size: ${fontSize.md};
`;

const EditIcon = styled.div`
  color: ${colors.grey};
  position: absolute;
  top: 10px;
  right: 10px;
  pointer-events: none;
`;

const ErrorMsg = styled.p`
  height: 20px;
  color: #da0000;
  font-size: ${fontSize.base};
`;

const DeleteAccountBtn = styled.button`
  cursor: pointer;
`;

const ProfileEditModal = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onChange" });
  const [isChageThumbnail, setIsChageThumbnail] = useState(false);
  const [isShowMessage, setIsShowMessage] = useState(false);
  const [newThumbnailUrl, setNewThumbnailUrl] = useState("");
  const [updateProfile, { data: updateRes, isSuccess: isUpdateSuccess }] =
    useUpdateProfileMutation();
  const [signout, { data: signoutRes, isSuccess: isSignoutSuccess }] =
    useSignoutMutation();
  const { id, nickname, email, thumbnail } = useSelector(
    (state) => state.user.user
  );

  const dispatch = useDispatch();

  const image = watch("image");

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    formData.append("nickname", data.nickname);
    formData.append("id", id);
    updateProfile(formData);
  };

  useEffect(() => {
    if (image && image.length > 0) {
      setIsChageThumbnail(true);
      const file = image[0];
      setNewThumbnailUrl(URL.createObjectURL(file));
    }
  }, [image]);

  useEffect(() => {
    if (isUpdateSuccess) {
      onClose();
      showToast(updateRes?.message);
    }
  }, [isUpdateSuccess, updateRes, onClose]);

  useEffect(() => {
    if (isSignoutSuccess) {
      dispatch(logout());
      onClose();
      showToast(signoutRes?.message);
    }
  }, [isSignoutSuccess, signoutRes, dispatch, onClose]);

  return (
    <Modal onClose={onClose}>
      <Base onSubmit={handleSubmit(onSubmit)}>
        <Content>
          <Thumbnail>
            <img
              src={isChageThumbnail ? newThumbnailUrl : thumbnail}
              alt="프로필 사진"
            />
            <input
              {...register("image")}
              type="file"
              id="edit"
              accept="image/*"
            />
            <label htmlFor="edit">
              <IoMdReverseCamera />
            </label>
          </Thumbnail>
          <Info>
            <InfoItem>
              <Name>닉네임</Name>
              <InputBox>
                <Input
                  type="text"
                  defaultValue={nickname}
                  autoFocus
                  {...register("nickname", {
                    required: "필수 정보입니다.",
                  })}
                />
                <EditIcon>
                  <FiEdit3 />
                </EditIcon>
              </InputBox>
              <ErrorMsg>{errors.nickname && errors.nickname.message}</ErrorMsg>
            </InfoItem>
            <InfoItem>
              <Name>이메일</Name>
              <Input type="text" disabled value={email} />
            </InfoItem>
            <DeleteAccountBtn
              type="button"
              onClick={() => setIsShowMessage(true)}
            >
              <u>회원탈퇴</u>
            </DeleteAccountBtn>
            {isShowMessage && (
              <SignoutMessage
                isSignoutLoading={isSubmitting}
                onCancelClick={() => setIsShowMessage(false)}
                onDeleteClick={() => signout({ id })}
              />
            )}
          </Info>
        </Content>
        <Button type="submit" disabled={isSubmitting}>
          수정
        </Button>
      </Base>
    </Modal>
  );
};

export default ProfileEditModal;

const Welcome = ({ name, isMember }) => {
  return (
    <welcome>
      {isMember === true
        ? `${name}님 다시 오셨군요`
        : `${name}님 가입하시겠어요?`}
    </welcome>
  );
};
export default Welcome;

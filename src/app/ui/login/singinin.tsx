const SignIn = () => {
	return (
		<div className="w-full flex flex-col gap-2">
			<p className="font-semibold text-lg">신규회원</p>

			<form className="w-full ">
				<div className="flex flex-col gap-6">
					<label>
						<input
							className="w-full text-md font-medium outline-none border-b-[1px] border-gray-300"
							placeholder="닉네임을 입력하고 회원가입하기를 눌러주세요."
						/>
					</label>

					<button className="bg-[#FEE501] rounded-xl w-full p-2 text-center font-semibold">
						<input
							type="submit"
							hidden
						/>
						회원가입하기
					</button>
				</div>
			</form>
		</div>
	);
};

export default SignIn;

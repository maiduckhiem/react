import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
export default function Categoryadd(props) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    props.onADD(data);
  };
  const navigate = useNavigate();

  return (
    <form className="mx-10 grid grid-cols-12 gap-24" onSubmit={handleSubmit(onSubmit)}>
      <div className="col-span-4">
        <h3 className="font-bold text-xl">Mời bạn thêm thông tin:</h3>
        <div className="mt-5">
          <p>* tên sản phẩm :</p>
          <input className="border-2 border-gray-400 w-96 rounded p-2"
            type="text"
            {...register("name", { required: true, maxLength: 255 })}
            placeholder="Tên sản phẩm"
          />
          {errors.name && <span>Field is required</span>}
        </div>
        <button className="mt-5 bg-green-600 p-1 rounded text-white px-3">Thêm</button>
        <button className="mt-5 ml-5 " onClick={() => navigate(-1)}>Quay lại</button>
      </div>
    </form>
  );
}

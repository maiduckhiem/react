import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Read } from "../../../api/categoryAPI";

export default function Categoryedit(props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  // Lấy ID trên url thông qua hook useParams
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // khai báo hàm getProduct
    const getCategory = async () => {
      try {
        // call API lấy thông tin sản phẩm thông qua ID gửi lên
        const { data } = await Read(id);
        reset(data);
      } catch (error) { }
    };
    getCategory();
  }, [id, reset]);

  const onSuDmit = (data) => {
    props.onUPDATE(data);
  };

    return (
      <form className="ml-10" onSubmit={handleSubmit(onSuDmit)}>
        <h3 className="font-bold text-xl">Mời bạn sửa thông tin:</h3>
        <div className="mt-5">
          <p>* tên sản phẩm</p>
          <input className="border-2 border-gray-400 w-96 rounded p-2"
            type="text"
            {...register("name", { required: true })}
            placeholder="Tên sản phẩm"
          />
          {errors.name && <span>Field is required</span>}
        </div>
        <button className="mt-5 bg-green-600 p-1 rounded text-white px-2">Cập nhật</button>
        <button className="mt-5 ml-5 " onClick={() => navigate(-1)}>Quay lại</button>
      </form>
    );
}

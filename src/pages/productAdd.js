import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
export default function ProductAdd(props) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    props.onAdd(data);
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
        <div className="mt-5">
          <p>* số lượng :</p>
          <input className="border-2 border-gray-400 w-96 rounded p-2"
            type="number"
            {...register("quantity", { required: true, maxLength: 35 })}
            placeholder="số lượng"
          />
        </div>
        <div className="mt-5">
          <p>* giá sản phẩm :</p>
          <input className="border-2 border-gray-400 w-96 rounded p-2"
            type="number"
            {...register("price", { required: true, maxLength: 35 })}
            placeholder="Giá sản phẩm"
          />
        </div>
        <button className="mt-5 bg-green-600 p-1 rounded text-white px-3">Thêm</button>
        <button className="mt-5 ml-5 " onClick={() => navigate(-1)}>Quay lại</button>
      </div>
      <div className="col-span-8">
        <div className="mt-12">
          <p>* mô tả :</p>
          <textarea className="border-2 border-gray-400 w-96 rounded p-2 w-full" rows="5" type="text"
            {...register("description", { required: true })}
            placeholder="mô tả"></textarea>
          {errors.name && <span>Field is required</span>}
        </div>
        <select
          style={{ width: 200 }}
          {...register('categoryId')}
          className='border-2 p-2 rounded'
        >
          {props.category && props.category.map((category, index) => {
            return (
              <option value={category.id} key={index}>{category.name}</option>
            )
          })}

        </select>,
        <Upload
          listType="picture"
          className="upload-list-inline pl-5 "
        >
          <Button className="mt-4" icon={<UploadOutlined />}>Upload</Button>
        </Upload>
      </div>
    </form>
  );
}
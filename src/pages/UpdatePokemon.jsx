import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { GetJobsById, SetJobsHandleChange, PutJobsById } from "../store/actions/jobsAction";
import { useEffect } from "react";
import { FormEdit, Title } from "../components";

export default function FormEditPokemon() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //   const { jobsId, jobsLoading } = useSelector((state) => state.JobsReducer);

  //   useEffect(() => {
  //     dispatch(GetJobsById(id));
  //     // eslint-disable-next-line
  //   }, [id]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    // dispatch(SetJobsHandleChange({ ...jobsId, [name]: value }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // dispatch(PutJobsById(id, jobsId));
    navigate("/");
  };

  return (
    <>
      <div className="container mt-3">
        <Title title={"Update Pokemon"} />
        <FormEdit handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit} />
      </div>
    </>
  );
}

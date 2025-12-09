import Header from "../components/Header/Header";
import "./StartPage.css";
import { useSelector, useDispatch } from "react-redux";
import { setNickname, ensureUserId } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const loadLeaderboard = () => {
  try { return JSON.parse(localStorage.getItem("simon-leaderboard") || "[]"); }
  catch { return []; }
};
const schema = Yup.object().shape({
  nickname: Yup.string()
    .trim()
    .min(2, "Мінімум 2 символи")
    .max(16, "Максимум 16 символів")
    .required("Введіть нікнейм"),
});

export default function StartPage() {
  const { userId, nickname } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const leaderboard = useSelector(state => state.leaderboard).slice(0, 10);

  return (
    <div className="wrap">
      <Header title="Simon Says" />
      <p className="sub">Введіть нікнейм і починайте гру. (Прогрес зберігатиметься локально).</p>

      <Formik
        enableReinitialize
        initialValues={{ nickname: nickname || "" }}
        validationSchema={schema}
        onSubmit={(values) => {
          dispatch(setNickname(values.nickname.trim()));
          dispatch(ensureUserId());
          const uid = userId || localStorage.getItem("simon-uid");
          navigate(`/user/${uid}/game`);
        }}
      >
        {() => (
          <Form>
            <div className="row">
              <Field
                name="nickname"
                placeholder="Ваш нік"
                className="input"
              />
              <button type="submit" className="btn">Почати</button>
            </div>
            <ErrorMessage name="nickname" component="div" className="error" />
          </Form>
        )}
      </Formik>

      <h3 style={{marginTop:24}}>🏆 Таблиця лідерів</h3>
      <table className="table">
        <thead>
          <tr><th>#</th><th>Нік</th><th>Рівень</th><th>Дата</th></tr>
        </thead>
        <tbody>
          {leaderboard.length === 0 ? (
            <tr><td colSpan="4" style={{opacity:.7}}>Поки що порожньо — станьте першим!</td></tr>
          ) : leaderboard.map((r, i) => (
            <tr key={r.id + "_" + i}>
              <td>{i + 1}</td>
              <td>{r.nickname}</td>
              <td>{r.level}</td>
              <td>{new Date(r.ts).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {userId && nickname && (
        <div style={{marginTop:16}}>
          <button className="btn" onClick={() => navigate(`/user/${userId}/game`)}>
            Продовжити як {nickname}
          </button>
        </div>
      )}
    </div>
  );
}

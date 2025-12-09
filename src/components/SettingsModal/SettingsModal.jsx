import ReactDOM from "react-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { setDifficulty } from "../../store/gameSettingsSlice";
import "./SettingsModal.css";

const schema = Yup.object().shape({
  difficulty: Yup.string().required("Оберіть рівень складності"),
});

export default function SettingsModal({ isOpen, onClose }) {
  const difficulty = useSelector(state => state.gameSettings.difficulty);
  const dispatch = useDispatch();

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content settings">
        <h2>⚙️ Налаштування гри</h2>
        <Formik
          initialValues={{ difficulty }}
          validationSchema={schema}
          onSubmit={(values) => {
            dispatch(setDifficulty(values.difficulty));
            onClose();
          }}
        >
          {() => (
            <Form>
              <label htmlFor="difficulty">Рівень складності:</label>
              <Field as="select" id="difficulty" name="difficulty">
                <option value="easy">Легкий</option>
                <option value="medium">Середній</option>
                <option value="hard">Складний</option>
              </Field>
              <ErrorMessage
                name="difficulty"
                component="p"
                className="error"
              />

              <div className="form-buttons">
                <button type="submit">Зберегти</button>
                <button type="button" onClick={onClose}>
                   Закрити
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}

function Encuesta() {
  return (
    <form id="survey-form">
      <div>
        <label id="name-label" htmlFor="name">
          {' '}
          Tu primer nombre{' '}
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Coloca tu primer nombre"
          required
        />
      </div>
      <div>
        <label id="email-label" htmlFor="email">
          Tu correo{' '}
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Coloca un correo electrónico que te guste"
          required
        />
      </div>
      <div>
        <label id="number-label" htmlFor="number">
          {' '}
          Tu edad{' '}
        </label>
        <input
          type="number"
          name="age"
          id="number"
          min="10"
          max="99"
          placeholder="Coloca tu edad"
        />
      </div>
      <div>
        <p> Mes de Nacimiento </p>
        <select id="dropdown" name="role" required>
          <option disabled selected>
            Selecciona entre las alternativas{' '}
          </option>
          <option value="enero">Enero</option>
          <option value="febrero"> Febrero </option>
          <option value="marzo"> Marzo </option>
          <option value="abril"> Abril </option>
          <option value="mayo"> Mayo </option>
          <option value="junio"> Junio </option>
          <option value="julio"> Julio </option>
          <option value="agosto"> Agosto </option>
          <option value="septiembre"> Septiembre </option>
          <option value="octubre"> Octubre </option>
          <option value="noviembre"> Noviembre </option>
          <option value="diciembre"> Diciembre </option>
        </select>
      </div>

      <div>
        <p>¿Recomendarías hacer turismo por Chile?</p>
        <label>
          <input
            name="user-recommend"
            value="definitely"
            type="radio"
            checked
          />
          Definitivamente
        </label>
        <label>
          <input name="user-recommend" value="maybe" type="radio" />
          Tal vez
        </label>
        <label>
          <input name="user-recommend" value="not-sure" type="radio" />
          No estoy seguro
        </label>
      </div>

      <div>
        <p>¿Recomendarías hacer turismo por Chile?</p>
        <label>
          <input
            name="user-recommend"
            value="definitely"
            type="checkbox"
            checked
          />
          Definitivamente
        </label>
        <label>
          <input name="user-recommend" value="maybe" type="checkbox" />
          Tal vez
        </label>
        <label>
          <input name="user-recommend" value="not-sure" type="checkbox" />
          No estoy seguro
        </label>
      </div>

      <div>
        <p>¿Cual es tu canción favorita?</p>
        <select id="most-like" name="mostLike" required>
          <option disabled selected>
            Seleciona una opción
          </option>
          <option value="challenges">Norte </option>
          <option value="projects">Centro</option>
          <option value="community">Sur</option>
          <option value="openSource">Austral</option>
        </select>
      </div>

      <div>
        <p>¿Algo más que agregar?</p>
        <textarea
          id="comments"
          name="comment"
          placeholder="Expresa tus comentarios aquí"
        ></textarea>
      </div>

      <div>
        <button type="submit" id="submit">
          ¿Cual es mi predicción para este mes?
        </button>
      </div>
    </form>
  );
}

export default Encuesta;

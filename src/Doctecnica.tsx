function DocTecnica() {
  return (
    <div>
      <nav id="navbar">
        <header> Resumen Documentación @redux/toolkit </header>
        <ul>
          <li>
            <a href="#Introducción"> Introducción </a>
          </li>
          <li>
            <a href="#createStore()"> createStore() </a>
          </li>
          <li>
            <a href="#createReducer()"> createReducer() </a>
          </li>
          <li>
            <a href="#createAction()"> createAction() </a>
          </li>
          <li>
            <a href="#createSlice()"> createSlice() </a>
          </li>
          <li>
            <a href="#createAsyncThunk()"> createAsyncThunk() </a>
          </li>
          <li>
            <a href="#createEntityAdapter()"> createEntityAdapter() </a>
          </li>
          <li>
            <a href="#createSelector()"> createSelector() </a>
          </li>
        </ul>
      </nav>

      <main id="main-doc">
        <section id="Introducción">
          <header>Introducción</header>
          <article>
            <p>
              {' '}
              Provide some tools that abstract over the setup process and handle
              the most common use cases, as well as include some useful
              utilities that will let the user simplify their application code{' '}
            </p>
            <p>
              {' '}
              <code> @redux/toolkit </code> resuelve varias quejas recurrentes entre
              los usuarios de redux:
            </p>
            <ul>
              <li> Configuring a Redux store is too complicated </li>
              <li>
                {' '}
                I have to add a lot of packages to get Redux to do anything
                useful{' '}
              </li>
              <li> Redux requires too much boilerplate code </li>
            </ul>
            <p> Entremos en detalle: </p>
          </article>
        </section>

        <section id="createStore()">
          <header> createStore() </header>
          <article>
            <p>
              {' '}
              Wraps createStore to provide simplified configuration options and
              good defaults. It can automatically combine your slice reducers,
              adds whatever Redux middleware you supply, includes redux-thunk by
              default, and enables use of the Redux DevTools Extension{' '}
            </p>
          </article>
        </section>

        <section id="createReducer()">
          <header> createReducer() </header>
          <article>
            <p>
              Lets you supply a lookup table of action types to case reducer
              functions, rather than writing switch statements. In addition, it
              automatically uses the immer library to let you write simpler
              immutable updates with normal mutative code, like{' '}
              <code> state.todos[3].completed = true </code>.
            </p>
          </article>
        </section>

        <section id="createAction()">
          <header> createAction() </header>
          <article>
            <p>
              Generates an action creator function for the given action type
              string. The function itself has <code> toString() </code> defined,
              so that it can be used in place of the type constant.
            </p>
          </article>
        </section>

        <section id="createSlice()">
          <header> createSlice() </header>
          <p>
            {' '}
            Accepts an object of reducer functions, a slice name, and an initial
            state value, and automatically generates a slice reducer with
            corresponding action creators and action types.{' '}
          </p>
        </section>

        <section id="createAsyncThunk()">
          <header> createAsyncThunk() </header>
          <article>
            <p>
              {' '}
              Accepts an action type string and a function that returns a
              promise, and generates a thunk that dispatches
              pending/fulfilled/rejected action types based on that promise{' '}
            </p>
          </article>
        </section>

        <section id="createEntityAdapter()">
          <header> createEntityAdapter() </header>
          <article>
            <p>
              {' '}
              Generates a set of reusable reducers and selectors to manage
              normalized data in the store{' '}
            </p>
          </article>
        </section>

        <section id="createSelector()">
          <header> createSelector() </header>
          <article>
            <p>
              {' '}
              The <code> createSelector </code> utility from the{' '}
              <code> Reselect </code> library, re-exported for ease of use.{' '}
            </p>
          </article>
        </section>
      </main>
    </div>
  );
}

export default DocTecnica;

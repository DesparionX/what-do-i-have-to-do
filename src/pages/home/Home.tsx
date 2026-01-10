import "./Home.css";

export function Home() {
  return (
    <div className="snap-container">
      <article className="max-w-350 text-center snap-section items-center">
        <h1 className="custom-stroke">
          Welcome to my{" "}
          <p className="inline custom-blue">"What Do I Have To Do"</p> app !
        </h1>
        <p className="mt-5 text-4xl font-bold custom-stroke text-gray-200">
          This is a simple task management application designed to help you keep
          track of your to-do, build as an exercise to improve my React and
          TypeScript skills.
        </p>
        <p className="mt-10 max-w-300 text-3xl font-bold custom-stroke text-gray-200">
          It does not use any API, just a fake database stored in the browser's
          local storage, and a small back-end integrated here. So if you clear
          your browser data, you will lose all your tasks and account.
        </p>
        <p className="mt-10 max-w-300 text-3xl font-bold custom-stroke text-gray-200">
          Works best with <p className="inline custom-blue">Chrome</p> on
          desktop and mobile devices.
        </p>
      </article>
      <article className="max-w-350 text-center snap-section items-center">
        <h1 className="custom-stroke">
          <p className="custom-blue">How it works ?</p>
        </h1>
        <div className="mt-5 max-w-300 justify-items-center">
          <p className="inline custom-blue text-3xl font-bold custom-stroke text-gray-200">
            REGISTER
          </p>
          <p className="inline text-2xl font-bold custom-stroke text-gray-200">
            {" - "} Simple registration form, without any validations for now.
          </p>
          <p className="max-w-200 text-2xl font-bold custom-stroke text-gray-200">
            Keep in mind, that all the data is stored in the browser's local
            storage, so don't forget to check "Remember me" when you{" "}
            <p className="inline text-3xl custom-blue">Log In</p>.{" "}
          </p>
        </div>
        <div className="mt-5 max-w-300 justify-items-center">
          <p className="inline custom-blue text-3xl font-bold custom-stroke text-gray-200">
            ADD LIST
          </p>
          <p className="inline text-2xl font-bold custom-stroke text-gray-200">
            {" - "} In order to have a list, you must be logged in first, then
            simply click on the "Add List" button, enter a title for your new
            list, create at least one task, and save it.
          </p>
        </div>
        <div className="mt-5 max-w-300 justify-items-center">
          <p className="inline custom-blue text-3xl font-bold custom-stroke text-gray-200">
            LIST MANIPULATIONS
          </p>
          <p className="inline text-2xl font-bold custom-stroke text-gray-200">
            {" - "} Once you have created a list, you can edit or delete it,
            also you can mark tasks as completed by clicking on them.
          </p>
        </div>
      </article>
    </div>
  );
}

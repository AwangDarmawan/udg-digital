

import PropTypes from "prop-types";

const Form = ({ name, setName, handleSubmit }) => (
  <section
    className="
      w-full
      pb-10
      px-4
      sm:px-6
      lg:px-8
    "
  >
    <div className="max-w-6xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-10">
        <p
          data-aos="fade-up"
          className="
            text-red-500
            tracking-[0.25em]
            text-xs
            sm:text-sm
            mb-2
            font-playfair
          "
        >
          YOUR RESPONSE
        </p>

        <h2
          data-aos="zoom-in"
          className="
            font-netflix
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            text-white
          "
        >
          TAMBAHKAN UNDANGAN
        </h2>

        <div className="w-20 sm:w-24 h-1 bg-red-600 mx-auto mt-4 rounded-full" />
      </div>

      {/* Form Card */}
      <div
        className="
          w-full
          max-w-xl
          mx-auto
          bg-white
          shadow-xl
          rounded-2xl
          p-5
          sm:p-6
          md:p-8
          
        "
      >
        <form
          className="space-y-5"
          onSubmit={handleSubmit}
        >
          <div>
            <label
              htmlFor="name"
              className="
                block
                text-sm
                font-semibold
                text-black
                font-playfair
                mb-2
              "
            >
              * Name
            </label>

            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nama Undangan"
              required
              className="
                w-full
                px-4
                py-3
                border
                border-gray-300
                rounded-lg
                outline-none
                focus:ring-2
                font-semibold
                font-playfair
                text-black
               
              "
            />
          </div>

          <button
            type="submit"
            className="
              w-full
              bg-red-600
              hover:bg-red-700
              text-white
              py-3
              rounded-lg
              transition-all
              duration-300
              font-semibold
            "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </section>
);

Form.propTypes = {
  name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Form;
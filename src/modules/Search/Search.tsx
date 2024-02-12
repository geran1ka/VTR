import { useState } from "react";
import s from "./Search.module.scss";
import SearchIcon from "./search.svg?react";
import { fetchWeahter } from "../../store/weaterSlice/weaterSlice";
import { useAppDispatch } from "../../hooks";

export const Search = () => {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState("");

  const handlerSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    dispatch(fetchWeahter(search));
    setSearch("");
  };

  const handleChange = (e: React.ChangeEvent<EventTarget>) => {
    if (e.target instanceof HTMLInputElement) {
      setSearch(e.target.value);
    }
  };
  return (
    <form className={s.form} onSubmit={handlerSubmit}>
      <input
        type="search"
        className={s.search}
        onChange={handleChange}
        value={search}
      />
      <button className={s.btn} type="submit">
        {/* <SearchIcon /> */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3.44099 9.956C2.57443 10.8215 2.06134 11.9787 2.0018 13.202C1.94226 14.4252 2.34055 15.6268 3.11897 16.5723C3.89739 17.5179 5.00012 18.1395 6.21205 18.316C7.42399 18.4925 8.65822 18.2112 9.67399 17.527L13.93 21.784C14.0674 21.9245 14.2532 22.0075 14.4496 22.0159C14.646 22.0243 14.8382 21.9575 14.9872 21.8292C15.1361 21.7009 15.2306 21.5207 15.2513 21.3252C15.2721 21.1298 15.2176 20.9337 15.099 20.777L15.024 20.69L10.807 16.472C11.5782 15.4831 11.9434 14.2374 11.828 12.9887C11.7126 11.74 11.1255 10.5822 10.1861 9.75138C9.24679 8.92055 8.02599 8.47917 6.77252 8.51719C5.51905 8.55521 4.32725 9.06977 3.43999 9.956H3.44099ZM16.654 16.501C16.429 17.788 16.106 18.957 15.702 19.955L15.732 19.983L15.856 20.123C16.076 20.418 16.2 20.747 16.234 21.075C18.2785 20.1246 19.9433 18.5133 20.96 16.501H16.654V16.501ZM12.25 16.5L14.534 18.787C14.736 18.187 14.915 17.519 15.064 16.795L15.121 16.501L12.251 16.5H12.25ZM9.31399 11.05C9.63558 11.3621 9.8919 11.7351 10.068 12.1472C10.2441 12.5593 10.3366 13.0023 10.3399 13.4504C10.3432 13.8985 10.2574 14.3429 10.0874 14.7575C9.91741 15.1722 9.66666 15.5489 9.34974 15.8658C9.03282 16.1826 8.65605 16.4333 8.24135 16.6032C7.82665 16.7731 7.38231 16.8588 6.93417 16.8554C6.48603 16.852 6.04305 16.7595 5.63099 16.5833C5.21894 16.407 4.84604 16.1507 4.53399 15.829C3.9045 15.1942 3.55213 14.3359 3.554 13.4419C3.55587 12.5479 3.91183 11.6911 4.54397 11.059C5.17611 10.4268 6.03294 10.0709 6.92692 10.069C7.8209 10.0671 8.67921 10.4195 9.31399 11.049V11.05ZM15.45 10H11.75C12.2593 10.7155 12.6035 11.5351 12.7578 12.3998C12.912 13.2644 12.8725 14.1525 12.642 15H15.352C15.5271 13.5027 15.5713 11.993 15.484 10.488L15.45 10ZM16.957 10C17.0618 11.4719 17.0507 12.9498 16.924 14.42L16.867 15H21.57C22.0765 13.3818 22.1653 11.6617 21.828 10H16.958H16.957ZM14.862 2.407C15.743 3.757 16.398 5.736 16.745 8.061L16.807 8.501H21.397C20.8794 7.11981 20.0636 5.86976 19.0077 4.83993C17.9518 3.81009 16.6817 3.02582 15.288 2.543L14.984 2.443L14.862 2.407V2.407ZM12.026 2.002C10.749 2.002 9.46499 4.384 8.86799 7.841C9.33299 8.001 9.77999 8.221 10.199 8.499L15.287 8.5C14.747 4.691 13.382 2.002 12.026 2.002ZM9.18899 2.407C7.70282 2.84828 6.33922 3.62817 5.20532 4.68538C4.07142 5.74259 3.1981 7.04832 2.65399 8.5H3.64899C4.7532 7.76761 6.07116 7.42677 7.39199 7.532C7.71399 5.674 8.23799 4.062 8.91899 2.852L9.08099 2.577L9.18899 2.407V2.407Z"
            fill="#7994F5"
          />
        </svg>
      </button>
    </form>
  );
};

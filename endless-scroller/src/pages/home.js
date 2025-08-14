import axios from "axios";
import UserCard from "../components/userCard";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import { useCallback, useEffect, useState } from "react";
export default function Home() {
  const [user, setUser] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchUsers = useCallback(async () => {
    if (loading) return;
    setLoading(true);
    const response = await axios.get(
      `https://randomuser.me/api/?page=${page}&results=10`
    );
    setUser([...user, ...response.data.results]);
    setLoading(false);
    setPage(page + 1);
  }, [loading, page, user]);

  useInfiniteScroll(fetchUsers);
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Infinite Scroll Users</h1>
      {user.map((user, i) => (
        <UserCard
          key={i}
          name={`${user.name.first} ${user.name.last}`}
          email={user.email}
          picture={user.picture.thumbnail}
        />
      ))}
      {loading && <p style={{ textAlign: "center" }}>Loading...</p>}
    </div>
  );
}

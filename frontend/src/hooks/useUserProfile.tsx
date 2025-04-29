import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login, setLoading } from '../features/UserSlice';
import { ROUTES } from '../config/config';

const useUserProfile = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(ROUTES.profile, { withCredentials: true });
                dispatch(login({
                    id: response.data._id,
                    name: response.data.displayName || response.data.username,
                    image: response.data.profilePicture,
                    email: response.data.email || undefined,
                    isLoggedIn: true,
                }));
            } catch (error) {
                console.error('Error fetching profile:', error);
            } finally {
                dispatch(setLoading(false));
            }
        };

        fetchData();
    }, [dispatch]);
};

export default useUserProfile;

import { useSelector, useDispatch } from 'react-redux'

export const CurrentSession = () => {
  const sessions = useSelector((state) => state.sessions.data)
  return sessions
}

import { h, JSX } from 'preact';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components';
import api from '../../lib/api';

interface FormData {
  name: HTMLInputElement;
  description: HTMLTextAreaElement;
}

const AvatarFactoryCreate = () => {
  const navigate = useNavigate();
  const onSubmit = async (e: JSX.TargetedEvent<HTMLFormElement, Event>) => {
    e.preventDefault();
    if (e.target === null) {
      return;
    }
    if (!('name' in e.target) || !('description' in e.target)) {
      return;
    }
    const formData: FormData = e.target as FormData;
    try {
      const response = await api.post('/avatar-factory', {
        name: formData.name.value,
        description: formData.description.value,
      });
      navigate(`/avatar-factory/${(response as JSONObject)['id']}`, { replace: true });
    } catch (e) {
      console.log('Error', e);
    }
  };

  return (
    <div class="bg-gray-100 flex-grow">
      <div class="max-w-2xl p-4 my-4 mx-auto overflow-hidden text-left align-middle bg-white shadow-xl rounded-2xl">
        <h2 class="text-lg font-bold text-gray-900 mb-2">New Avatar Factory</h2>
        <form onSubmit={onSubmit} class="block mt-2">
          <p class="prose">
            Tell us a little bit about your new factory! Don't worry about getting it perfect now.
            You can always change this later.
          </p>
          <hr class="my-4" />
          <label>
            Avatar Factory Name
            <input type="text" name="name" placeholder="My Great Factory" required={true} />
          </label>
          <label>
            Description
            <textarea name="description" placeholder="Once upon a time..." required={true} />
          </label>
          <Button isSubmit={true}>Create</Button>
        </form>
      </div>
    </div>
  );
};

export default AvatarFactoryCreate;

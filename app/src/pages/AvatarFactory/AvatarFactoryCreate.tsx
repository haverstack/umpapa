import { h } from 'preact';
import { Button } from '../../components';
import { getUrl } from '../../lib/api';

const AvatarFactoryCreate = () => {
  return (
    <div class="bg-gray-100 flex-grow">
      <div class="max-w-2xl p-4 my-4 mx-auto overflow-hidden text-left align-middle bg-white shadow-xl rounded-2xl">
        <h2 class="text-lg font-bold text-gray-900 mb-2">New Avatar Factory</h2>
        <form action={getUrl('/')} method="POST" class="block mt-2">
          <p class="prose">
            Tell us a little bit about your new factory! Don't worry about getting it perfect now.
            You can always change this later.
          </p>
          <hr class="my-4" />
          <label>
            Avatar Factory Name
            <input type="text" name="name" placeholder="My Great Factory" />
          </label>
          <label>
            Description
            <textarea name="description" placeholder="Once upon a time..." />
          </label>
          <Button isSubmit={true}>Create</Button>
        </form>
      </div>
    </div>
  );
};

export default AvatarFactoryCreate;

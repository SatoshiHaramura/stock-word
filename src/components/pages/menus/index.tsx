import React, { FC, useState } from 'react';

import MenusPage from './presenter';
import type { CategoryWithQuestionGroups, UserSetting } from '@/types';

type Props = {
  categories: CategoryWithQuestionGroups[];
  userSetting: UserSetting;
  setUserSetting: (userSetting: UserSetting) => void;
  transitToTestsPage: () => void;
};

const Index: FC<Props> = (props) => {
  const { categories, userSetting, setUserSetting, transitToTestsPage } = props;

  const [category, setCategory] = useState<CategoryWithQuestionGroups>(
    categories[0]
  );
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleClickCategory = (category: CategoryWithQuestionGroups): void => {
    setCategory(category);
    setIsModalOpen(true);
  };

  const onClose = (): void => setIsModalOpen(false);
  const handleClickQuestionGroup = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    setUserSetting({
      ...userSetting,
      questionGroupId: Number(event.currentTarget.value),
    });
    transitToTestsPage();
  };

  return (
    <MenusPage
      categories={categories}
      handleClickCategory={handleClickCategory}
      isOpen={isModalOpen}
      onClose={onClose}
      category={category}
      handleClickQuestionGroup={handleClickQuestionGroup}
    ></MenusPage>
  );
};

export default Index;

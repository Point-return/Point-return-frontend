import { Card, Flex, Label, Text } from '@gravity-ui/uikit';
import { StatisticResponse } from '@src/services/models';
import React, { FC } from 'react';

interface StatsItemProps {
  title: string;
  statistic: StatisticResponse | undefined;
}

const StatsItem: FC<StatsItemProps> = ({ title, statistic }) => {
  return (
    <>
      <Flex direction="column" space={5}>
        <Text variant="body-3">{title}</Text>
        {statistic === undefined ? (
          <Text variant="body-1">Статистика отсутствует</Text>
        ) : (
          <Card view="clear">
            <Flex direction="column">
              <Label
                theme="success"
                value={
                  statistic.QuantitySuccessfull
                    ? `${statistic.QuantitySuccessfull}`
                    : '0'
                }
              >
                Сопоставлено
              </Label>
              <Label
                theme="warning"
                value={
                  statistic.QuantitySkipped
                    ? `${statistic.QuantitySkipped}`
                    : '0'
                }
              >
                Пропущено
              </Label>
              <Label theme="info" value={`${statistic.percent}%`}>
                Соотношение
              </Label>
            </Flex>
          </Card>
        )}
      </Flex>
    </>
  );
};

export default StatsItem;

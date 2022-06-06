import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { MdDoubleArrow } from 'react-icons/md';
import { BiRupee } from 'react-icons/bi';
import { BsThreeDots } from 'react-icons/bs';
import { IoLogOutOutline } from 'react-icons/io5';
import {
  BullishOrBerrish,
  ExitDate,
  ExpertAvatar,
  ExpertInfoWrapper,
  ExpertName,
  FeedCardContainer,
  FeedStatsCard,
  FeedStatsTitle,
  FeedStatsValue,
  FeedStatsWrapper,
  InstrumentInfoWrapper,
  InstrumentName,
  InstrumentReturn,
  InstrumentTransactionType,
  InvestNowButton,
  PostedOn,
  ReactionCount,
  ReactionIcon,
  ReactionList,
  Reason,
  Row,
  UnlockNowButton,
  UpsideArrow,
  UpsideInPercentValue,
  UpsideInPriceValue,
} from './FeedCard.Elements';
import MinInvestIcon from 'assests/images/feedcard/min_investment.svg';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);
export interface IFeed {
  _id: string;
  avatar: string;
  name: string;
  rating: number;
  isCertified: boolean;
  premiumTradeType: string;
  transactionType: string;
  instrumentName: string;
  instrumentReturn: number;
  reason?: string;
  minInvest: number;
  upsideInPercent: number;
  upsideInPrice: number;
  triggerLevel: string;
  bullishOrBearish: string;
  reactions: {
    reaction: string;
    _id: string;
  }[];
  reactionCount: number;
  exitDate: string;
  shareCount: number;
  createdAt: string;
  premiumTradePrice: number;
}

const FeedCard = ({ feed }: { feed: IFeed }) => {
  return (
    <FeedCardContainer>
      {/* expert info */}
      <Row>
        <ExpertInfoWrapper>
          <ExpertAvatar src={feed.avatar} />
          <ExpertName>{feed.name}</ExpertName>
        </ExpertInfoWrapper>

        <BsThreeDots />
      </Row>
      {/* intrumnent info */}
      <Row>
        <InstrumentInfoWrapper>
          {feed.premiumTradeType === 'PAID' ? (
            <>
              <InstrumentTransactionType
                transactionType={feed.transactionType}
                premiumTradeType={feed.premiumTradeType}
              >
                <AiFillStar />
              </InstrumentTransactionType>
              <InstrumentName>Premium Trade</InstrumentName>
            </>
          ) : (
            <>
              <InstrumentTransactionType
                transactionType={feed.transactionType}
                premiumTradeType={feed.premiumTradeType}
              >
                {feed.transactionType === 'BUY' ? 'B' : 'S'}
              </InstrumentTransactionType>
              <InstrumentName>{feed.instrumentName}</InstrumentName>
              <InstrumentReturn instrumentReturn={feed.instrumentReturn}>
                {feed.instrumentReturn}%
              </InstrumentReturn>
            </>
          )}
        </InstrumentInfoWrapper>
        <BullishOrBerrish>{feed.bullishOrBearish}</BullishOrBerrish>
      </Row>

      {/* reason */}
      <Row>
        <Reason>{feed.reason}</Reason>
      </Row>

      {/* stats card */}
      <FeedStatsWrapper>
        <FeedStatsCard>
          <FeedStatsTitle>Min Investment</FeedStatsTitle>
          <FeedStatsValue>
            <img src={MinInvestIcon.src} alt='min investment' />
            {feed.minInvest}
          </FeedStatsValue>
        </FeedStatsCard>

        <FeedStatsCard>
          <FeedStatsTitle>Upside</FeedStatsTitle>
          <FeedStatsValue>
            <UpsideArrow upsideInPercent={feed.upsideInPercent}>
              <MdDoubleArrow />
            </UpsideArrow>
            <UpsideInPercentValue upsideInPercent={feed.upsideInPercent}>
              {feed.upsideInPercent}%
            </UpsideInPercentValue>
            <UpsideInPriceValue>
              <BiRupee /> {feed.upsideInPrice}
            </UpsideInPriceValue>
          </FeedStatsValue>
        </FeedStatsCard>

        <FeedStatsCard>
          <FeedStatsTitle>Trigger Level</FeedStatsTitle>
          <FeedStatsValue>Entry Open</FeedStatsValue>
        </FeedStatsCard>

        <FeedStatsCard>
          <FeedStatsTitle>Exit Date</FeedStatsTitle>
          <FeedStatsValue>
            <IoLogOutOutline className='md:text-xl' />
            <ExitDate>
              {
                // current date is same as exit date
                dayjs(feed.exitDate).isSame(dayjs(), 'day') ? (
                  <span>Intra Day</span>
                ) : (
                  <>{dayjs(feed.exitDate).format('DD-MM-YYYY')}</>
                )
              }
            </ExitDate>
          </FeedStatsValue>
        </FeedStatsCard>
      </FeedStatsWrapper>
      {/* reaction and share info */}

      <Row>
        <Row>
          <ReactionList>
            {feed.reactions.map((reaction) => (
              <ReactionIcon key={reaction._id}>
                {reaction.reaction}
              </ReactionIcon>
            ))}
          </ReactionList>
          <ReactionCount>{feed.reactionCount} Likes</ReactionCount>
        </Row>
        <PostedOn> Posted {dayjs(feed.createdAt).fromNow()}</PostedOn>
      </Row>

      {/* footer - action btn */}
      <Row>
        <div></div>
        {feed.premiumTradeType === 'PAID' ? (
          <UnlockNowButton>
            <span>
              <BiRupee /> {feed.premiumTradePrice}
            </span>
            <span>Unlock Now</span>
          </UnlockNowButton>
        ) : (
          <InvestNowButton>Invest Now</InvestNowButton>
        )}
      </Row>
    </FeedCardContainer>
  );
};

export default FeedCard;

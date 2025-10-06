// Import all domain metadata
import jazzyMangoMeta from './domains/jazzy-mango.js';
import briskOtterMeta from './domains/brisk-otter.js';
import briskElmMeta from './domains/brisk-elm.js';
import gleamingFernMeta from './domains/gleaming-fern.js';
import loftySproutMeta from './domains/lofty-sprout.js';
import localhostMeta from './domains/localhost.js';
import defaultMeta from './domains/default.js';
import waveViewMeta from './domains/wave-view.js';
import yellowRacoonMeta from './domains/yellow-racoon.js';
import switchRunnerMeta from './domains/switch-runner.js';
import confusedEliphantMeta from './domains/confused-eliphant.js';
import heightWaysMeta from './domains/height-ways.js';
import timberTubeMeta from './domains/timber-tube.js';
import gameonliveMeta from './domains/gameonlive.js';
import nextlevelstreamsMeta from './domains/nextlevelstreams.js';
import timberContentMeta from './domains/timber-content.js';
import iqchampionhubMeta from './domains/iqchampionhub.js';
import jewelVideoContentMeta from './domains/jewel-video-content.js';
import briskvideosMeta from './domains/briskvideos.js';
import funpuzzlepalaceMeta from './domains/funpuzzlepalace.js';
import hastyreelsMeta from './domains/hastyreels.js';
import snappyFigMeta from './domains/snappy-fig.js';

// Domain mapping
const domainMapping = {
  "jazzy-mango.com": jazzyMangoMeta.id,
  "brisk-otter.com": briskOtterMeta.id,
  "brisk-elm.com": briskElmMeta.id,
  "gleaming-fern.com": gleamingFernMeta.id,
  "lofty-sprout.com": loftySproutMeta.id,
  "wave-view.com": waveViewMeta.id,
  "yellow-racoon.com": yellowRacoonMeta.id,
  "switch-runner.com": switchRunnerMeta.id,
  "confused-eliphant.com": confusedEliphantMeta.id,
  "height-ways.com": heightWaysMeta.id,
  "timber-tube.com": timberTubeMeta.id,
  "gameonlive.tv": gameonliveMeta.id,
  "nextlevelstreams.com": nextlevelstreamsMeta.id,
  "timber-content.com": timberContentMeta.id,
  "iqchampionhub.com": iqchampionhubMeta.id,
  "jewel-video-content.com": jewelVideoContentMeta.id,
  "briskvideos.com": briskvideosMeta.id,
  "funpuzzlepalace.com": funpuzzlepalaceMeta.id,
  "hastyreels.com": hastyreelsMeta.id,
  "snappy-fig.com": snappyFigMeta.id,
  "localhost": localhostMeta.id,
  "127.0.0.1": localhostMeta.id
};

// Designs mapping
const designs = {
  [jazzyMangoMeta.id]: jazzyMangoMeta.design,
  [briskOtterMeta.id]: briskOtterMeta.design,
  [briskElmMeta.id]: briskElmMeta.design,
  [gleamingFernMeta.id]: gleamingFernMeta.design,
  [loftySproutMeta.id]: loftySproutMeta.design,
  [waveViewMeta.id]: waveViewMeta.design,
  [yellowRacoonMeta.id]: yellowRacoonMeta.design,
  [switchRunnerMeta.id]: switchRunnerMeta.design,
  [confusedEliphantMeta.id]: confusedEliphantMeta.design,
  [heightWaysMeta.id]: heightWaysMeta.design,
  [timberTubeMeta.id]: timberTubeMeta.design,
  [gameonliveMeta.id]: gameonliveMeta.design,
  [nextlevelstreamsMeta.id]: nextlevelstreamsMeta.design,
  [timberContentMeta.id]: timberContentMeta.design,
  [iqchampionhubMeta.id]: iqchampionhubMeta.design,
  [jewelVideoContentMeta.id]: jewelVideoContentMeta.design,
  [briskvideosMeta.id]: briskvideosMeta.design,
  [funpuzzlepalaceMeta.id]: funpuzzlepalaceMeta.design,
  [hastyreelsMeta.id]: hastyreelsMeta.design,
  [snappyFigMeta.id]: snappyFigMeta.design,
  [localhostMeta.id]: localhostMeta.design,
  [defaultMeta.id]: defaultMeta.design
};

// All domains metadata collection
export const domainsMetadata = {
  "jazzy-mango.com": jazzyMangoMeta,
  "brisk-otter.com": briskOtterMeta,
  "brisk-elm.com": briskElmMeta,
  "gleaming-fern.com": gleamingFernMeta,
  "lofty-sprout.com": loftySproutMeta,
  "wave-view.com": waveViewMeta,
  "yellow-racoon.com": yellowRacoonMeta,
  "switch-runner.com": switchRunnerMeta,
  "confused-eliphant.com": confusedEliphantMeta,
  "height-ways.com": heightWaysMeta,
  "timber-tube.com": timberTubeMeta,
  "gameonlive.tv": gameonliveMeta,
  "nextlevelstreams.com": nextlevelstreamsMeta,
  "timber-content.com": timberContentMeta,
  "iqchampionhub.com": iqchampionhubMeta,
  "jewel-video-content.com": jewelVideoContentMeta,
  "briskvideos.com": briskvideosMeta,
  "funpuzzlepalace.com": funpuzzlepalaceMeta,
  "hastyreels.com": hastyreelsMeta,
  "snappy-fig.com": snappyFigMeta,
  "localhost": localhostMeta,
  "127.0.0.1": localhostMeta,
  "default": defaultMeta
};

export default domainMapping;
export { designs };
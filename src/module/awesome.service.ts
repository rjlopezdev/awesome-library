import { Injectable, Inject } from '@nestjs/common';
import { MODULE_CONFIG, AwesomeConfig } from './config';

/**
 * Useful service
 */
@Injectable()
export class AwesomeService {

  /**
   * Creates a new `AwesomeService`
   * @param config Provided configuration
   */
  constructor(
    @Inject(MODULE_CONFIG) private config: AwesomeConfig
  ) {}

  /**
   * Prints configuration
   */
  public printConfig(): void {
    console.warn(`Provided configuration:\n ${JSON.stringify(this.config)}`);
  }

}

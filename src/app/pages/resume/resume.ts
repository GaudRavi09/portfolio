import { Component, CUSTOM_ELEMENTS_SCHEMA, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  styleUrl: './resume.scss',
  templateUrl: './resume.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Resume implements OnInit, OnDestroy {
  shakeInterval!: NodeJS.Timeout;
  isCVDownloaded = sessionStorage.getItem('isCVDownloaded');

  ngOnInit() {
    // trigger shake every 3 seconds
    if (!this.isCVDownloaded) this.shakeInterval = setInterval(this.triggerShake, 3000);
  }

  downloadResume() {
    const link = document.createElement('a');
    link.href = '/pdf/resume.pdf';
    link.download = 'GaudRaviResume.pdf';
    link.click();

    // set user downloaded CV once and clear interval
    clearInterval(this.shakeInterval);
    sessionStorage.setItem('isCVDownloaded', 'true');
  }

  private triggerShake() {
    // do not add shake effect if user download CV once
    if (!this.isCVDownloaded) {
      const downloadButtons: HTMLElement | null = document.querySelector('.download-button');
      if (downloadButtons) {
        downloadButtons.classList.add('shake');
        // shake effect duration
        setTimeout(() => downloadButtons.classList.remove('shake'), 2000);
      }
    }
  }

  ngOnDestroy() {
    // clear the interval on component destroy
    clearInterval(this.shakeInterval);
  }
}

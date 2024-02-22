import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { TooltipDirections, EnumTooltipDirections, TooltipPositions } from '@gcba/ngx-obelisco/core/models';

@Component({
  selector: 'o-tooltip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './o-tooltip.component.html',
  styleUrls: ['./o-tooltip.component.scss']
})
export class OTooltipComponent implements OnInit, AfterViewInit {
  // Definición de las propiedades de entrada del componente.
  @Input() public direction: TooltipDirections = EnumTooltipDirections.TOP;
  @Input() public description: string = 'Esta es la descripción de un tooltip.';
  @Input() public customClasses: string = '';

  // Propiedades para controlar la posición y dirección del tooltip.
  previousDirection!: TooltipDirections;
  position: TooltipPositions = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  };

  // Propiedades para controlar el tamaño de la ventana y las zonas de interrupción.
  currentScreenX: number = window.innerWidth;
  currentScreenY: number = window.innerHeight;
  breakzoneX: number = 360;
  breakzoneY: number = 220;

  // Referencia al elemento DOM del tooltip.
  tooltipRect!: DOMRect;

  constructor(private elementRef: ElementRef) {
    this.setScreenAndBreakzones();
  }

  ngOnInit() {
    this.setScreenAndBreakzones();
    this.updatePosition();
  }

  ngAfterViewInit() {
    this.setScreenAndBreakzones();
    this.updatePosition();
    this.previousDirection = this.direction;
  }

  // Este método se dispara cuando el usuario desplaza la ventana.
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.setScreenAndBreakzones();
    this.updatePosition();
  }

  // Este método se dispara cuando el usuario redimensiona la ventana.
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.setScreenAndBreakzones();
    this.updatePosition();
  }

  // Actualiza el tamaño actual de la pantalla y define las zonas de interrupción (breakzones).
  setScreenAndBreakzones() {
    this.currentScreenX = window.innerWidth;
    this.currentScreenY = window.innerHeight;
    this.breakzoneX = this.currentScreenX <= 768 ? 200 : 360;
    this.breakzoneY = this.currentScreenY <= 768 ? 120 : 220;
  }

  // Actualizar la posición del tooltip en el próximo frame de animación.
  updatePosition() {
    requestAnimationFrame(() => {
      this.tooltipRect = this.elementRef.nativeElement.getBoundingClientRect();
      const { top, left, right, bottom } = this.tooltipRect;
      this.position = {
        top: top + window.pageYOffset,
        left: left + window.pageXOffset,
        right: right + window.pageXOffset,
        bottom: bottom + window.pageYOffset
      };

      this.adjustDirection(this.position);
    });
  }

  // Ajustar la dirección del tooltip en función de su posición actual.
  adjustDirection(position: TooltipPositions) {
    const { top, left, right, bottom } = position;

    switch (this.direction) {
      case EnumTooltipDirections.TOP:
        if (top - window.pageYOffset <= this.breakzoneY) {
          this.previousDirection = EnumTooltipDirections.TOP;
          this.direction = EnumTooltipDirections.BOTTOM;
        } else {
          this.previousDirection = EnumTooltipDirections.BOTTOM;
          this.direction = EnumTooltipDirections.TOP;
        }
        break;

      case EnumTooltipDirections.BOTTOM:
        if (this.currentScreenY - (bottom - window.pageYOffset) <= this.breakzoneY) {
          this.previousDirection = EnumTooltipDirections.BOTTOM;
          this.direction = EnumTooltipDirections.TOP;
        } else {
          this.previousDirection = EnumTooltipDirections.TOP;
          this.direction = EnumTooltipDirections.BOTTOM;
        }
        break;

      case EnumTooltipDirections.TOP_LEFT:
        if (top - window.pageYOffset <= this.breakzoneY) {
          this.previousDirection = EnumTooltipDirections.TOP_LEFT;
          this.direction = EnumTooltipDirections.BOTTOM_LEFT;
        } else if (left < this.breakzoneX) {
          this.previousDirection = EnumTooltipDirections.TOP_LEFT;
          this.direction = EnumTooltipDirections.TOP_RIGHT;
        }
        break;

      case EnumTooltipDirections.BOTTOM_LEFT:
        if (this.currentScreenY - (bottom - window.pageYOffset) <= this.breakzoneY) {
          this.previousDirection = EnumTooltipDirections.BOTTOM_LEFT;
          this.direction = EnumTooltipDirections.TOP_LEFT;
        }
        break;

      case EnumTooltipDirections.TOP_RIGHT:
        if (top - window.pageYOffset <= this.breakzoneY) {
          this.previousDirection = EnumTooltipDirections.TOP_RIGHT;
          this.direction = EnumTooltipDirections.BOTTOM_RIGHT;
        } else if (right > this.currentScreenX - this.breakzoneX) {
          this.previousDirection = EnumTooltipDirections.TOP_RIGHT;
          this.direction = EnumTooltipDirections.TOP_LEFT;
        }
        break;

      case EnumTooltipDirections.BOTTOM_RIGHT:
        if (this.currentScreenY - (bottom - window.pageYOffset) <= this.breakzoneY) {
          this.previousDirection = EnumTooltipDirections.BOTTOM_RIGHT;
          this.direction = EnumTooltipDirections.TOP_RIGHT;
        }
        break;

      case EnumTooltipDirections.RIGHT:
        if (right > this.currentScreenX - this.breakzoneX) {
          this.previousDirection = EnumTooltipDirections.RIGHT;
          this.direction = EnumTooltipDirections.LEFT;
        } else {
          this.previousDirection = EnumTooltipDirections.LEFT;
          this.direction = EnumTooltipDirections.RIGHT;
        }
        break;

      case EnumTooltipDirections.RIGHT_TOP:
        if (right > this.currentScreenX - this.breakzoneX) {
          this.previousDirection = EnumTooltipDirections.RIGHT_TOP;
          this.direction = EnumTooltipDirections.LEFT_TOP;
        } else {
          this.previousDirection = EnumTooltipDirections.LEFT_TOP;
          this.direction = EnumTooltipDirections.RIGHT_TOP;
        }
        break;

      case EnumTooltipDirections.RIGHT_BOTTOM:
        if (right > this.currentScreenX - this.breakzoneX) {
          this.previousDirection = EnumTooltipDirections.RIGHT_BOTTOM;
          this.direction = EnumTooltipDirections.LEFT_BOTTOM;
        } else {
          this.previousDirection = EnumTooltipDirections.LEFT_BOTTOM;
          this.direction = EnumTooltipDirections.RIGHT_BOTTOM;
        }
        break;

      case EnumTooltipDirections.LEFT:
        if (left < this.breakzoneX) {
          this.previousDirection = EnumTooltipDirections.LEFT;
          this.direction = EnumTooltipDirections.RIGHT;
        } else {
          this.previousDirection = EnumTooltipDirections.RIGHT;
          this.direction = EnumTooltipDirections.LEFT;
        }
        break;

      case EnumTooltipDirections.LEFT_TOP:
        if (left < this.breakzoneX) {
          this.previousDirection = EnumTooltipDirections.LEFT_TOP;
          this.direction = EnumTooltipDirections.RIGHT_TOP;
        } else {
          this.previousDirection = EnumTooltipDirections.RIGHT_TOP;
          this.direction = EnumTooltipDirections.LEFT_TOP;
        }
        break;

      case EnumTooltipDirections.LEFT_BOTTOM:
        if (left < this.breakzoneX) {
          this.previousDirection = EnumTooltipDirections.LEFT_BOTTOM;
          this.direction = EnumTooltipDirections.RIGHT_BOTTOM;
        } else {
          this.previousDirection = EnumTooltipDirections.RIGHT_BOTTOM;
          this.direction = EnumTooltipDirections.LEFT_BOTTOM;
        }
        break;
    }
  }
}
